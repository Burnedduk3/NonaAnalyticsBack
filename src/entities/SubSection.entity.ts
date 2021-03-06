import { Question } from '@entities/Question.entity';
import { Section } from '@entities/Section.entity';
import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class SubSection extends BaseEntity {
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

  // OneToMany
  @Field(() => [Question], { nullable: true })
  @OneToMany(() => Question, (question) => question.subSection)
  questions: Question[];

  // ManyToOne
  @Field(() => Section, { nullable: false })
  @ManyToOne(() => Section, (section) => section.subSections)
  section: Section;
}
