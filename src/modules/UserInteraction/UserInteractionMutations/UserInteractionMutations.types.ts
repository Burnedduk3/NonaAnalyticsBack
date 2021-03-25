import {
  SingleAnswerResponse,
  SingleFormResponse,
  SingleUserResponse,
} from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.types';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'User Interaction mutations' })
export class UserInteractionMutationsTypes {
  @Field({ nullable: false })
  startForm: SingleFormResponse;

  @Field({ nullable: false })
  createResponse: SingleAnswerResponse;

  @Field({ nullable: false })
  createUser: SingleUserResponse;

  @Field({ nullable: false })
  updateQuestionResponse: SingleAnswerResponse;
}
