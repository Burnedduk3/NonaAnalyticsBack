import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Input types for creating a section' })
export class StartFormInputs {
  @Field({ nullable: false, description: 'The name of the section' })
  userId: string;
}

@InputType({ description: 'Inputs for creating a user in the database' })
export class CreateUser {
  @Field({ nullable: false })
  CognitoPoolId: string;

  @Field({ nullable: false })
  phone: string;

  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  firstLastname: string;
}

@InputType({ description: 'Input for creating a response of a form' })
export class CreateResponse {
  @Field({ nullable: false })
  formId: string;

  @Field({ nullable: false })
  questionId: string;

  @Field({ nullable: false })
  response: string;
}
