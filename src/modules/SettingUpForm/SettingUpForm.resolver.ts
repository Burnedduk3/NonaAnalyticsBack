import { SettingUpFormMutationsTypes } from '@modules/SettingUpForm/SettingUpFormMutations/SettingUpFormMutations.types';
import { SettingUpFormQueriesTypes } from '@modules/SettingUpForm/SettingUpFormQueries/SettingUpFormQueries.types';
import { FieldResolver, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import { SettingUpFormTypes } from './SettingUpForm.types';
import { isAuth } from '@middlewares/isAuth';

@Resolver(/* istanbul ignore next */ () => SettingUpFormTypes)
export class SettingUpFormResolver {
  @Query(/* istanbul ignore next */ () => SettingUpFormQueriesTypes)
  //@UseMiddleware([isAuth])
  @FieldResolver()
  SettingUpFormQueries(): SettingUpFormQueriesTypes {
    return new SettingUpFormQueriesTypes();
  }

  @Mutation(/* istanbul ignore next */ () => SettingUpFormMutationsTypes)
  @UseMiddleware([isAuth])
  @FieldResolver()
  SettingUpFormMutation(): SettingUpFormMutationsTypes {
    return new SettingUpFormMutationsTypes();
  }
}
