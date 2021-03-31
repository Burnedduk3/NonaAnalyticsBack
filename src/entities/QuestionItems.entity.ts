import { Question } from '@entities/Question.entity';
import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class QuestionItems extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

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
  // ManyToOne
  @Field(() => [Question], { nullable: false })
  @ManyToMany(() => Question, (questions) => questions.items)
  questions: Question[];
}
