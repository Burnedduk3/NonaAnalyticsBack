import { isAuth } from '@middlewares/isAuth';
import { UserInteractionTypes } from '@modules/UserInteraction/UserInteraction.types';
import { UserInteractionMutationsTypes } from '@modules/UserInteraction/UserInteractionMutations/UserInteractionMutations.types';
import { UserInteractionQueriesTypes } from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.types';
import { FieldResolver, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';

@Resolver(/* istanbul ignore next */ () => UserInteractionTypes)
export class SettingUpFormResolver {
  @Query(/* istanbul ignore next */ () => UserInteractionQueriesTypes)
  @UseMiddleware([isAuth])
  @FieldResolver()
  UserInteractionQueries(): UserInteractionQueriesTypes {
    return new UserInteractionQueriesTypes();
  }

  @Mutation(/* istanbul ignore next */ () => UserInteractionMutationsTypes)
  @UseMiddleware([isAuth])
  @FieldResolver()
  UserInteractionMutation(): UserInteractionMutationsTypes {
    return new UserInteractionMutationsTypes();
  }
}
