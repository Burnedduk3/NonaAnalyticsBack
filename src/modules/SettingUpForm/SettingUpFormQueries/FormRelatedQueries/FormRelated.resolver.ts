import { Question } from '@entities/Question.entity';
import { GetSubSectionQuestionsInputs } from '@modules/SettingUpForm/SettingUpFormQueries/FormRelatedQueries/FormRelated.inputs';
import { FormRelatedTypes } from '@modules/SettingUpForm/SettingUpFormQueries/FormRelatedQueries/FormRelated.types';
import { MultipleQuestionResponse } from '@modules/SettingUpForm/SettingUpFormQueries/GeneralQueries/General.types';
import { Arg, FieldResolver, Resolver } from 'type-graphql';

@Resolver(() => FormRelatedTypes)
export class FormRelatedResolver {
  @FieldResolver(() => FormRelatedTypes)
  async getSubSectionQuestions(
    @Arg('Parameters') data: GetSubSectionQuestionsInputs,
  ): Promise<MultipleQuestionResponse> {
    try {
      const questions = await Question.find({
        relations: ['imagesPath', 'items', 'category'],
        join: {
          alias: 'question',
          leftJoinAndSelect: {
            subSection: 'question.subSection',
          },
        },
        where: (qb: any) => {
          qb.where('subSection.name = :name', { name: data.subSectionName })
            .andWhere('subSection.name = :name', { name: data.subSectionName })
            .andWhere('question.stack = :stack', { stack: data.stackNumber });
        },
        order: {
          order: 'ASC',
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
