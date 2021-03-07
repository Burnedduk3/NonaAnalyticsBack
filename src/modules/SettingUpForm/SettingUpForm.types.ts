import { Field, ObjectType } from 'type-graphql';
import { SettingUpFormQueriesTypes } from '@modules/SettingUpForm/SettingUpFormQueries/SettingUpFormQueries.types';

@ObjectType({ description: 'SettingUpForm Functions' })
export class SettingUpFormTypes {
  @Field({ nullable: false })
  SettingUpFormQueries: SettingUpFormQueriesTypes;

  @Field({ nullable: false })
  SettingUpFormMutation: string;
}
