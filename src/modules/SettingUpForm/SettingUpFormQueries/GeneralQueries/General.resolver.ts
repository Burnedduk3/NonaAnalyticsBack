import { Section } from '@entities/Section.entity';
import { SubSection } from '@entities/SubSection.entity';
import {
  GeneralTypes, MultipleCategoriesResponse, MultipleQuestionResponse,
  MultipleSectionsResponse,
  MultipleSubSectionResponse,
} from '@modules/SettingUpForm/SettingUpFormQueries/GeneralQueries/General.types';
import { FieldResolver, Resolver } from 'type-graphql';
import { Category } from '@entities/Category.entity';
import { Question } from '@entities/Question.entity';

@Resolver(() => GeneralTypes)
export class GeneralResolver {
  @FieldResolver(() => GeneralTypes)
  async getAllSections(): Promise<MultipleSectionsResponse> {
    try {
      const sections = await Section.find({
        relations: ['subSections'],
        order: {
          id: 'ASC',
        },
      });
      return {
        error: false,
        message: '',
        data: sections,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => GeneralTypes)
  async getAllSubSections(): Promise<MultipleSubSectionResponse> {
    try {
      const subSections = await SubSection.find({
        relations: ['questions', 'section'],
        order: {
          id: 'ASC',
        },
      });
      return {
        error: false,
        message: '',
        data: subSections,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => GeneralTypes)
  async getAllCategories(): Promise<MultipleCategoriesResponse> {
    try {
      const category = await Category.find({
        relations: ['questions'],
        order: {
          id: 'ASC',
        },
      });
      return {
        error: false,
        message: '',
        data: category,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => GeneralTypes)
  async getAllQuestions(): Promise<MultipleQuestionResponse> {
    try {
      const questions = await Question.find({
        relations: ['items', 'imagesPath', 'category', 'subSection'],
        order: {
          id: 'ASC',
        },
      });
      return {
        error: false,
        message: '',
        data: questions,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }
}
