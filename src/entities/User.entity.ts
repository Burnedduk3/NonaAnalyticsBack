import { Form } from '@entities/Form.entity';
import { IsEmail, MinLength } from 'class-validator';
import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  CognitoPoolId: string;

  @Field()
  @Column({ nullable: false, unique: true })
  phone: string;

  @Field()
  @Column({ nullable: false, unique: true })
  username: string;

  @Field()
  @Column({ nullable: false })
  @MinLength(8, { message: 'Less than 8' })
  password: string;

  @Field()
  @Column({ nullable: false, unique: true })
  @IsEmail()
  email: string;

  @Field()
  @Column({ nullable: false })
  firstName: string;

  @Field()
  @Column({ nullable: false })
  firstLastname: string;

  @Field()
  @Column('bool', { default: false })
  confirmed: boolean;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  // Relations

  // OneToMany
  @Field(() => [Form], { nullable: true })
  @OneToMany(() => Form, (form) => form.user)
  forms: Form[];
}
