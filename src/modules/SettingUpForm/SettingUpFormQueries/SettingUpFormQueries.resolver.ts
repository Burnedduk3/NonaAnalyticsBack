import { FormRelatedTypes } from '@modules/SettingUpForm/SettingUpFormQueries/FormRelatedQueries/FormRelated.types';
import { GeneralTypes } from '@modules/SettingUpForm/SettingUpFormQueries/GeneralQueries/General.types';
import { SettingUpFormQueriesTypes } from '@modules/SettingUpForm/SettingUpFormQueries/SettingUpFormQueries.types';
import { FieldResolver, Resolver } from 'type-graphql';

@Resolver(() => SettingUpFormQueriesTypes)
export class SettingUpFormQueriesResolver {
  @FieldResolver(/* istanbul ignore next */ () => SettingUpFormQueriesTypes) // without args
  General(): GeneralTypes {
    return new GeneralTypes();
  }

  @FieldResolver(() => SettingUpFormQueriesTypes)
  FormQueries(): FormRelatedTypes {
    return new FormRelatedTypes();
  }
}
