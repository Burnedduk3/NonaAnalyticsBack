import { Category } from '@entities/Category.entity';
import { Question } from '@entities/Question.entity';
import { QuestionImages } from '@entities/QuestionImages.entity';
import { QuestionItems } from '@entities/QuestionItems.entity';
import { Section } from '@entities/Section.entity';
import { SubSection } from '@entities/SubSection.entity';
import {
  CreateCategoryInput,
  CreateQuestionInput,
  CreateSectionInput,
  CreateSubSectionInput,
} from '@modules/SettingUpForm/SettingUpFormMutations/Create/Create.inputs';
import {
  CreateCategoryResponse,
  CreateQuestionResponse,
  CreateSectionResponse,
  CreateSubSectionResponse,
  CreateTypes,
} from '@modules/SettingUpForm/SettingUpFormMutations/Create/Create.types';
import { Arg, FieldResolver, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';

@Resolver(() => CreateTypes)
export class CreateFormMutationsResolver {
  @FieldResolver(() => CreateTypes)
  async createSection(@Arg('SectionData') data: CreateSectionInput): Promise<CreateSectionResponse> {
    try {
      const { name, order } = data;
      if (!name || order <= -1) {
        throw new Error('Unable to create section, data incomplete');
      }
      const newSection = await Section.create({ name, order }).save();
      return {
        error: false,
        message: '',
        data: newSection,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => CreateTypes)
  async createSubSection(@Arg('SubSectionData') data: CreateSubSectionInput): Promise<CreateSubSectionResponse> {
    try {
      const { name, order, sectionId } = data;
      if (!name || order <= -1) {
        throw new Error('Unable to create section, data incomplete');
      }

      const section = await Section.findOne({ where: { id: sectionId } });

      if (!section) {
        throw new Error('unable to find specified Section');
      }

      const newSubSection = await SubSection.create({ name, order }).save();

      if (!newSubSection) {
        throw new Error('unable to create Sub-Section');
      }

      await getConnection().createQueryBuilder().relation(SubSection, 'section').of(newSubSection).set(section);

      return {
        error: false,
        message: '',
        data: newSubSection,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => CreateTypes)
  async createQuestion(@Arg('QuestionData') data: CreateQuestionInput): Promise<CreateQuestionResponse> {
    try {
      const itemsToAdd: QuestionItems[] = [];
      const imagesToAdd: QuestionImages[] = [];
      const {
        inputConfirmation,
        order,
        placeHolder,
        question,
        stack,
        stackPhrase,
        subSectionId,
        categoryId,
        comboItems,
        imagesPath,
      } = data;

      if (
        !inputConfirmation ||
        order <= -1 ||
        !placeHolder ||
        !question ||
        stack <= -1 ||
        !stackPhrase ||
        !categoryId ||
        !comboItems ||
        !imagesPath
      ) {
        throw new Error('Unable to create section, data incomplete');
      }

      const subSection = await SubSection.findOne({ where: { id: subSectionId } });

      const category = await Category.findOne({ where: { id: categoryId } });

      if (!subSection || !category) {
        throw new Error('unable to find specified Subsection or category');
      }

      for (const [index, comboItem] of comboItems.entries()) {
        const possibleItem = await QuestionItems.findOne({ where: { name: comboItem } });
        if (possibleItem) {
          itemsToAdd.push(possibleItem);
        } else {
          const itemToAdd = await QuestionItems.create({ name: comboItem, order: index }).save();
          itemsToAdd.push(itemToAdd);
        }
      }

      for (const [index, imageItem] of imagesPath.entries()) {
        const possibleImage = await QuestionImages.findOne({
          where: { name: imageItem, order: index, alt: imageItem },
        });
        if (possibleImage) {
          imagesToAdd.push(possibleImage);
        } else {
          const imageToAdd = await QuestionImages.create({ src: imageItem }).save();
          imagesToAdd.push(imageToAdd);
        }
      }

      const newQuestion = await Question.create({
        inputConfirmation,
        order,
        placeHolder,
        question,
        stack,
        stackPhrase,
      }).save();

      if (!newQuestion) {
        throw new Error('unable to create Sub-Section');
      }

      await getConnection().createQueryBuilder().relation(Question, 'subSection').of(newQuestion).set(subSection);
      newQuestion.subSection = subSection;
      await getConnection().createQueryBuilder().relation(Question, 'category').of(newQuestion).set(category);
      newQuestion.category = category;
      for (const item of itemsToAdd) {
        await getConnection().createQueryBuilder().relation(Question, 'items').of(newQuestion).add(item);
        newQuestion.items.push(item)
      }

      for (const image of imagesToAdd) {
        await getConnection().createQueryBuilder().relation(Question, 'imagesPath').of(newQuestion).add(image);
        newQuestion.imagesPath.push(image);
      }

      return {
        error: false,
        message: '',
        data: newQuestion,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => CreateTypes)
  async createCategory(@Arg('CategoryData') data: CreateCategoryInput): Promise<CreateCategoryResponse> {
    try {
      const { name } = data;

      if (!name) {
        throw new Error('Missing data to create a category');
      }

      const newCategory = await Category.create({ name }).save();

      return {
        error: false,
        message: '',
        data: newCategory,
      };
    } catch (err) {
      return {
        error: true,
        message: err.message,
      };
    }
  }
}
