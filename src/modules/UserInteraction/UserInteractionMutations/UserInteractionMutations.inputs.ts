import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Input types for creating a section' })
export class CreateSectionInput {
  @Field({ nullable: false, description: 'The name of the section' })
  name: string;

  @Field({ nullable: false, description: 'The order of the section' })
  order: number;
}