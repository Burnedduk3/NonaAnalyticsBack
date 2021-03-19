import { Category } from '@entities/Category.entity';
import { Question } from '@entities/Question.entity';
import { Section } from '@entities/Section.entity';
import { SubSection } from '@entities/SubSection.entity';
import {
  DeleteCategoryInput,
  DeleteQuestionInput,
  DeleteSectionInput,
  DeleteSubSectionInput,
} from '@modules/SettingUpForm/SettingUpFormMutations/Delete/Delete.inputs';
import {
  DeleteCategoryResponse,
  DeleteQuestionResponse,
  DeleteSectionResponse,
  DeleteSubSectionResponse,
  DeleteTypes,
} from '@modules/SettingUpForm/SettingUpFormMutations/Delete/Delete.types';
import { Arg, FieldResolver, Resolver } from 'type-graphql';

@Resolver(() => DeleteTypes)
export class DeleteFormMutationsResolver {
  @FieldResolver(() => DeleteTypes)
  async deleteSection(@Arg('SectionData') data: DeleteSectionInput): Promise<DeleteSectionResponse> {
    try {
      const { id } = data;

      if (!id) {
        throw new Error('Missing data to delete a section');
      }

      const sectionToBeDeleted = await Section.findOne(id);

      if (!sectionToBeDeleted) {
        return {
          error: false,
          message: '',
        };
      }

      await Section.delete(sectionToBeDeleted.id);

      return {
        error: false,
        message: '',
        data: sectionToBeDeleted,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => DeleteTypes)
  async deleteSubSection(@Arg('SubSectionData') data: DeleteSubSectionInput): Promise<DeleteSubSectionResponse> {
    try {
      const { id } = data;

      if (!id) {
        throw new Error('Missing data to delete a sub-section');
      }

      const subSectionToBeDeleted = await SubSection.findOne(id);

      if (!subSectionToBeDeleted) {
        return {
          error: false,
          message: '',
        };
      }

      await SubSection.delete(subSectionToBeDeleted.id);

      return {
        error: false,
        message: '',
        data: subSectionToBeDeleted,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => DeleteTypes)
  async deleteQuestion(@Arg('QuestionData') data: DeleteQuestionInput): Promise<DeleteQuestionResponse> {
    try {
      const { id } = data;

      if (!id) {
        throw new Error('Missing data to delete a question');
      }

      const questionToDelete = await Question.findOne(id);

      if (!questionToDelete) {
        return {
          error: false,
          message: '',
        };
      }

      await Question.delete(questionToDelete.id);

      return {
        error: false,
        message: '',
        data: questionToDelete,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => DeleteTypes)
  async deleteCategory(@Arg('CategoryData') data: DeleteCategoryInput): Promise<DeleteCategoryResponse> {
    try {
      const { id } = data;

      if (!id) {
        throw new Error('Missing data to delete a category');
      }

      const categoryToBeDeleted = await Category.findOne(id);

      if (!categoryToBeDeleted) {
        return {
          error: false,
          message: '',
        };
      }

      await Category.delete(categoryToBeDeleted.id);

      return {
        error: false,
        message: '',
        data: categoryToBeDeleted,
      };
    } catch (err) {
      return {
        error: true,
        message: err.message,
      };
    }
  }
}
