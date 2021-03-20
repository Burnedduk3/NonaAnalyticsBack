import { UserInteractionTypes } from '@modules/UserInteraction/UserInteraction.types';
import { UserInteractionMutationsTypes } from '@modules/UserInteraction/UserInteractionMutations/UserInteractionMutations.types';
import { UserInteractionQueriesTypes } from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.types';
import { FieldResolver, Mutation, Query, Resolver } from 'type-graphql';

@Resolver(/* istanbul ignore next */ () => UserInteractionTypes)
export class SettingUpFormResolver {
  @Query(/* istanbul ignore next */ () => UserInteractionQueriesTypes)
  @FieldResolver()
  UserInteractionQueries(): UserInteractionQueriesTypes {
    return new UserInteractionQueriesTypes();
  }

  @Mutation(/* istanbul ignore next */ () => UserInteractionMutationsTypes)
  @FieldResolver()
  UserInteractionMutation(): UserInteractionMutationsTypes {
    return new UserInteractionMutationsTypes();
  }
}
