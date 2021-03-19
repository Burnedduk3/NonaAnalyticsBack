import { MultipleQuestionResponse } from '@modules/SettingUpForm/SettingUpFormQueries/GeneralQueries/General.types';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Fetch Filtered data for the form' })
export class FormRelatedTypes {
  @Field()
  getSubSectionQuestions: MultipleQuestionResponse;
}
