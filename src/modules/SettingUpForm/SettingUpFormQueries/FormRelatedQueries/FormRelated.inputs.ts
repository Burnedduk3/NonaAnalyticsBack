import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Input types for fetching the questions for a given sub-section and stack' })
export class GetSubSectionQuestionsInputs {
  @Field({ nullable: false, description: 'The name of the subsection you want to show' })
  subSectionName: string;

  @Field({ nullable: false, description: 'The stack of the questions to show' })
  stackNumber: number;
}