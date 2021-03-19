import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Question } from '@entities/Question.entity';

@ObjectType()
@Entity()
export class  QuestionImages extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  src: string;

  @Field()
  @Column({ nullable: false })
  alt: string;

  @Field()
  @Column({ nullable: false })
  order: number;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  // Relations
  // Relations
  // ManyToOne
  @Field(() => Question, { nullable: false })
  @ManyToOne(() => Question, (question) => question.questionResponses)
  questionId: Question;
}
