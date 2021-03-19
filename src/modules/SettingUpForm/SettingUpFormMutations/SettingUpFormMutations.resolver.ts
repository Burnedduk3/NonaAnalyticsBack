import { CreateTypes } from '@modules/SettingUpForm/SettingUpFormMutations/Create/Create.types';
import { SettingUpFormMutationsTypes } from '@modules/SettingUpForm/SettingUpFormMutations/SettingUpFormMutations.types';
import { FieldResolver, Resolver } from 'type-graphql';

@Resolver(() => SettingUpFormMutationsTypes)
export class SettingUpFormMutationsResolver {
  @FieldResolver(() => SettingUpFormMutationsTypes)
  Create(): CreateTypes {
    return new CreateTypes();
  }
}
