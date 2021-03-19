import { SettingUpFormMutationsTypes } from '@modules/SettingUpForm/SettingUpFormMutations/SettingUpFormMutations.types';
import { SettingUpFormQueriesTypes } from '@modules/SettingUpForm/SettingUpFormQueries/SettingUpFormQueries.types';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'SettingUpForm Functions' })
export class SettingUpFormTypes {
  @Field({ nullable: false })
  SettingUpFormQueries: SettingUpFormQueriesTypes;

  @Field({ nullable: false })
  SettingUpFormMutation: SettingUpFormMutationsTypes;
}
