import { Category } from '@entities/Category.entity';
import { Question } from '@entities/Question.entity';
import { Section } from '@entities/Section.entity';
import { SubSection } from '@entities/SubSection.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'return multiple Sections in the database' })
export class MultipleSectionsResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field(()=>[Section], { nullable: true })
  data?: Section[];
}

@ObjectType({ description: 'return a single Section in the database' })
export class SingleSectionsResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Section;
}

@ObjectType({ description: 'return multiple sub-sections in the database' })
export class MultipleSubSectionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field(()=>[SubSection],{ nullable: true })
  data?: SubSection[];
}

@ObjectType({ description: 'return single sub-section in the database' })
export class SingleSubSectionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: SubSection;
}

@ObjectType({ description: 'returns multiple question in the database' })
export class MultipleQuestionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field(()=>[Question],{ nullable: true })
  data?: Question[];
}

@ObjectType({ description: 'returns a single question in the database' })
export class SingleQuestionResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Question;
}

@ObjectType({ description: 'returns multiple categories in the database' })
export class MultipleCategoriesResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field(()=>[Category],{ nullable: true })
  data?: Category[];
}

@ObjectType({ description: 'returns a single category in the database' })
export class SingleCategoryResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: Category;
}

@ObjectType({ description: 'General Quesries to fetcha data' })
export class GeneralTypes {
  @Field()
  getAllSections: MultipleSectionsResponse;

  @Field()
  getAllSubSections: MultipleSubSectionResponse;

  @Field()
  getAllCategories: MultipleCategoriesResponse;

  @Field()
  getAllQuestions: MultipleQuestionResponse;
}
