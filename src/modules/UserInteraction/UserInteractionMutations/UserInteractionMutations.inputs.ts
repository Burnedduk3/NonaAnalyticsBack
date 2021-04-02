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
  email: string;

  @Field({ nullable: false })
  name: string;
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

@InputType({ description: 'Input to update the form progress' })
export class UpdateFormInputs {
  @Field({ nullable: false })
  formId: string;

  @Field({ nullable: false })
  progress: number;
}

@InputType({ description: 'Input to update the form consent' })
export class UpdateFormConsentInputs {
  @Field({ nullable: false })
  formId: string;
}

@InputType({ description: 'Input for updating a response of the form' })
export class UpdateResponse {
  @Field({ nullable: false })
  questionId: string;

  @Field({ nullable: false })
  newResponse: string;
}
