import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Input types for creating a section' })
export class CreateSectionInput {
  @Field({ nullable: false, description: 'The name of the section' })
  name: string;

  @Field({ nullable: false, description: 'The order of the section' })
  order: number;
}

@InputType({ description: 'Input types for creating a sub-section' })
export class CreateSubSectionInput {
  @Field({ nullable: false, description: 'The name of the sub-section' })
  name: string;

  @Field({ nullable: false, description: 'The order of the sub-section' })
  order: number;

  @Field({ nullable: false, description: 'The subsection id it corresponds to' })
  sectionId: number;
}

@InputType({ description: 'Input types for creating a category' })
export class CreateCategoryInput {
  @Field({ nullable: false, description: 'The name of the category' })
  name: string;
}

@InputType({ description: 'Input types for creating a question' })
export class CreateQuestionInput {
  @Field({ nullable: false, description: 'The question' })
  question: string;

  @Field({ nullable: false, description: 'The phrase of the pack of questions' })
  stackPhrase: string;

  @Field({ nullable: false, description: 'The placeholder if the questions has one' })
  placeHolder: string;

  @Field({ nullable: false, description: 'The order' })
  order: number;

  @Field({ nullable: false, description: 'The stack ' })
  stack: number;

  @Field({ nullable: false, description: 'The desired input of the question' })
  inputConfirmation: string;

  @Field({ nullable: false, description: 'The subsection id it corresponds to' })
  subSectionId: number;

  @Field(() => [String], { nullable: false, description: 'The items of the combo box' })
  comboItems: string[];

  @Field(() => [String], { nullable: false, description: 'The images of the question box' })
  imagesPath: string[];

  @Field({ nullable: false, description: 'the category id of the question' })
  categoryId: number;
}
