import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Input types for delete a section' })
export class DeleteSectionInput {
  @Field({ nullable: false, description: 'The id of the section to delete' })
  id: number;
}

@InputType({ description: 'Input types for delete a sub-section' })
export class DeleteSubSectionInput {
  @Field({ nullable: false, description: 'The id of the sub-section to delete' })
  id: number;
}

@InputType({ description: 'Input types for delete a category' })
export class DeleteCategoryInput {
  @Field({ nullable: false, description: 'The name of the category to delete' })
  id: number;
}

@InputType({ description: 'Input types for delete a question' })
export class DeleteQuestionInput {
  @Field({ nullable: false, description: 'The question to delete' })
  id: number;
}
