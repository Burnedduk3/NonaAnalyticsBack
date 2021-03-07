import { FieldResolver, Mutation, Query, Resolver } from 'type-graphql';
import { SettingUpFormTypes } from './SettingUpForm.types';
import { SettingUpFormQueriesTypes } from '@modules/SettingUpForm/SettingUpFormQueries/SettingUpFormQueries.types';

@Resolver(/* istanbul ignore next */() => SettingUpFormTypes)
export class SettingUpFormResolver {
  @Query(/* istanbul ignore next */() => SettingUpFormQueriesTypes)
  @FieldResolver()
  SettingUpFormQueries(): SettingUpFormQueriesTypes {
    return new SettingUpFormQueriesTypes();
  }

  @Mutation(/* istanbul ignore next */() => SettingUpFormTypes)
  SettingUpFormMutation(): SettingUpFormTypes {
    return new SettingUpFormTypes();
  }
}
