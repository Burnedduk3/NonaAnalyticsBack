import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Form } from '@entities/Form.entity';
import { Question } from '@entities/Question.entity';

@ObjectType()
@Entity()
export class FormResponses extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  response: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  // Relations

  // ManyToOne
  @Field(() => Form, { nullable: false })
  @ManyToOne(() => Form, (form) => form.responses)
  form: Form;

  // ManyToOne
  @Field(() => Question, { nullable: false })
  @ManyToOne(() => Question, (question) => question.questionResponses)
  question: Question;
}
