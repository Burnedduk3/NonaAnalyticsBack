import { CreateTypes } from '@modules/SettingUpForm/SettingUpFormMutations/Create/Create.types';
import { DeleteTypes } from '@modules/SettingUpForm/SettingUpFormMutations/Delete/Delete.types';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Creating the Form in the database resolvers' })
export class SettingUpFormMutationsTypes {
  @Field()
  Create: CreateTypes;

  @Field()
  Delete: DeleteTypes;
}
