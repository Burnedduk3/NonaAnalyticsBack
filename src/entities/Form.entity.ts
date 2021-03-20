import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FormResponses } from '@entities/FormResponses.entity';
import { User } from '@entities/User.entity';

// formQuestions: [FormQuestion] @connection(name: "FormQuestions")

@ObjectType()
@Entity()
export class Form extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, default: false })
  finished: boolean;

  @Field()
  @Column({ nullable: false, default: 0 })
  percentage: number;

  @Field()
  @Column({ nullable: false, default: false  })
  consent: boolean;

  @Field()
  @Column({ nullable: false, default: false  })
  sentEmail: boolean;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  // Relations
  // OneToMany
  @Field(() => [FormResponses], { nullable: true })
  @OneToMany(() => FormResponses, (question) => question.form, { cascade: true })
  responses: FormResponses[];

  // ManyToOne
  @Field(() => User, { nullable: false })
  @ManyToOne(() => User, (user) => user.forms)
  user: User;
}
