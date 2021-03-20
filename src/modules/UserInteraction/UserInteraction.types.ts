import { UserInteractionMutationsTypes } from '@modules/UserInteraction/UserInteractionMutations/UserInteractionMutations.types';
import { UserInteractionQueriesTypes } from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.types';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'SettingUpForm Functions' })
export class UserInteractionTypes {
  @Field({ nullable: false })
  SettingUpFormQueries: UserInteractionQueriesTypes;

  @Field({ nullable: false })
  SettingUpFormMutation: UserInteractionMutationsTypes;
}
