import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Question } from '@entities/Question.entity';

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  // Relations

  // OneToMany
  @Field(() => [Question], { nullable: true })
  @OneToMany(() => Question, (question) => question.category)
  questions: Question[];
}
