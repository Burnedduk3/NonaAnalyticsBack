import { Category } from '@entities/Category.entity';
import { Question } from '@entities/Question.entity';
import { Section } from '@entities/Section.entity';
import { SubSection } from '@entities/SubSection.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Create Section in the database' })
export class CreateSectionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Section;
}

@ObjectType({ description: 'Create sub-section in the database' })
export class CreateSubSectionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: SubSection;
}

@ObjectType({ description: 'Create question in the database' })
export class CreateQuestionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Question;
}

@ObjectType({ description: 'Create category in the database' })
export class CreateCategoryResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Category;
}

@ObjectType({ description: 'Creating the Form in the database resolvers' })
export class CreateTypes {
  @Field(() => CreateSectionResponse, { nullable: false })
  createSection: CreateSectionResponse;

  @Field(() => CreateSubSectionResponse, { nullable: false })
  createSubSection: CreateSubSectionResponse;

  @Field(() => CreateQuestionResponse, { nullable: false })
  createQuestion: CreateQuestionResponse;

  @Field(() => CreateCategoryResponse, { nullable: false })
  createCategory: CreateCategoryResponse;
}
