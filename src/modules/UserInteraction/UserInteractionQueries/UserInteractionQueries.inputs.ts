import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Input types for listing user info' })
export class ListUserFormsInputs {
  @Field({ nullable: false, description: 'The user cognito id' })
  userCognitoId: string;
}
