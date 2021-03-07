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
  @Field(() => Question, { nullable: false })
  @ManyToOne(() => Question, (question) => question.questionResponses)
  question: Question;
  // ManyToOne
  // @Field(() => User, { nullable: false })
  // @ManyToOne(() => User, (user) => user.restaurant)
  // owner: User;
  //
  // // OneToMany
  // @Field(() => [Recipes], { nullable: true })
  // @OneToMany(() => Recipes, (recipe) => recipe.restaurantMenu)
  // recipes: Recipes[];
  //
  // // OneToMany
  // @Field(() => [Reservation], { nullable: true })
  // @OneToMany(() => Reservation, (reservations) => reservations.restaurant)
  // reservations: Reservation[];
}
