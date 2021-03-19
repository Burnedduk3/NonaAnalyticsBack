import { CreateTypes } from '@modules/SettingUpForm/SettingUpFormMutations/Create/Create.types';
import { SettingUpFormMutationsTypes } from '@modules/SettingUpForm/SettingUpFormMutations/SettingUpFormMutations.types';
import { FieldResolver, Resolver } from 'type-graphql';
import { DeleteTypes } from '@modules/SettingUpForm/SettingUpFormMutations/Delete/Delete.types';

@Resolver(() => SettingUpFormMutationsTypes)
export class SettingUpFormMutationsResolver {
  @FieldResolver(() => SettingUpFormMutationsTypes)
  Create(): CreateTypes {
    return new CreateTypes();
  }

  @FieldResolver(() => SettingUpFormMutationsTypes)
  Delete(): DeleteTypes {
    return new DeleteTypes();
  }
}
