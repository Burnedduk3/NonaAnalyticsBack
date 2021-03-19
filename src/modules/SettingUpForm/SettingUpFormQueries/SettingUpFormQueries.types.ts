import { FormRelatedTypes } from '@modules/SettingUpForm/SettingUpFormQueries/FormRelatedQueries/FormRelated.types';
import { GeneralTypes } from '@modules/SettingUpForm/SettingUpFormQueries/GeneralQueries/General.types';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Creating the Form in the database resolvers' })
export class SettingUpFormQueriesTypes {
  @Field()
  General: GeneralTypes;

  @Field()
  FormQueries: FormRelatedTypes;
}
