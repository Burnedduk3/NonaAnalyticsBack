import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FormResponses } from '@entities/FormResponses.entity';
import { QuestionItems } from '@entities/QuestionItems.entity';
import { QuestionImages } from '@entities/QuestionImages.entity';
import { Category } from '@entities/Category.entity';
import { SubSection } from '@entities/SubSection.entity';

// usedForms: [FormQuestion] @connection(name: "QuestionsString")
// category: Category @connection(name: "Category")
// subSection: SubSection @connection(name: "SubSectionQuestions")


@ObjectType()
@Entity()
export class Question extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  question: string;

  @Field()
  @Column({ nullable: false })
  stack: number;

  @Field()
  @Column({ nullable: false })
  stackPhrase: string;

  @Field()
  @Column({ nullable: false })
  placeHolder: string;

  @Field()
  @Column({ nullable: false })
  order: number;

  @Field()
  @Column({ nullable: true })
  inputConfirmation: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  // Relations

  // OneToMany
  @Field(() => [FormResponses], { nullable: true })
  @OneToMany(() => FormResponses, (response) => response.question)
  questionResponses: FormResponses[];

  // OneToMany
  @Field(() => [QuestionItems], { nullable: true })
  @OneToMany(() => QuestionItems, (items) => items.question)
  items: QuestionItems[];

  // OneToMany
  @Field(() => [QuestionImages], { nullable: true })
  @OneToMany(() => QuestionImages, (image) => image.questionId)
  imagesPath: QuestionImages[];

  // ManyToOne
  @Field(() => Category, { nullable: false })
  @ManyToOne(() => Category, (category) => category.questions)
  category: Category;

  // ManyToOne
  @Field(() => SubSection, { nullable: false })
  @ManyToOne(() => SubSection, (subSection) => subSection.questions)
  subSection: Category;

  // // ManyToOne
  // @Field(() => User, { nullable: false })
  // @ManyToOne(() => User, (user) => user.reservations)
  // owner: User;

  // // ManyToOne
  // @Field(() => User, { nullable: false })
  // @ManyToOne(() => User, (user) => user.reservations)
  // owner: User;
}
