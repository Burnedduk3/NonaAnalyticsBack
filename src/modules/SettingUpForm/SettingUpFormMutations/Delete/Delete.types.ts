import { Category } from '@entities/Category.entity';
import { Question } from '@entities/Question.entity';
import { Section } from '@entities/Section.entity';
import { SubSection } from '@entities/SubSection.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Delete Section in the database' })
export class DeleteSectionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Section;
}

@ObjectType({ description: 'Delete sub-section in the database' })
export class DeleteSubSectionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: SubSection;
}

@ObjectType({ description: 'Delete question in the database' })
export class DeleteQuestionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Question;
}

@ObjectType({ description: 'Delete category in the database' })
export class DeleteCategoryResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Category;
}

@ObjectType({ description: 'Deleting the Form in the database resolvers' })
export class DeleteTypes {
  @Field(() => DeleteSectionResponse, { nullable: false })
  deleteSection: DeleteSectionResponse;

  @Field(() => DeleteSubSectionResponse, { nullable: false })
  deleteSubSection: DeleteSubSectionResponse;

  @Field(() => DeleteQuestionResponse, { nullable: false })
  deleteQuestion: DeleteQuestionResponse;

  @Field(() => DeleteCategoryResponse, { nullable: false })
  deleteCategory: DeleteCategoryResponse;
}
