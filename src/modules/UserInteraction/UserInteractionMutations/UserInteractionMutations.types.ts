import {
  MultipleFormResponse,
  SingleUserResponse,
} from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.types';
import { Field, ObjectType } from 'type-graphql';


// TODO create the mutations of the user interaction
@ObjectType({ description: 'SettingUpForm Functions' })
export class UserInteractionMutationsTypes {
  @Field({ nullable: false })
  createForm: MultipleFormResponse;

  @Field({ nullable: false })
  createResponse: SingleUserResponse;

  @Field({ nullable: false })
  createUser: SingleUserResponse;
}
