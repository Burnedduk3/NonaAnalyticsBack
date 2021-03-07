import { Category } from '@entities/Category.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'SettingUpForm queries response' })
export class SettingUpFormQueriesResponse {
  @Field()
  error: boolean;
  @Field({ nullable: true })
  message?: string;
  @Field()
  data?: string;
}

@ObjectType({ description: 'SettingUpForm bye custom response' })
export class byeWorldResponse {
  @Field()
  error: boolean;
  @Field({ nullable: true })
  message?: string;
  @Field(() => [Category])
  data?: Category[];
}

@ObjectType({ description: 'SettingUpForm functions resolvers' })
export class SettingUpFormQueriesTypes {
  @Field(() => SettingUpFormQueriesResponse, { nullable: false })
  helloWorld: SettingUpFormQueriesResponse;

  @Field(() => byeWorldResponse, { nullable: false })
  byeWorld: byeWorldResponse;

  @Field(() => SettingUpFormQueriesResponse, { nullable: false })
  TestingDifferent: SettingUpFormQueriesResponse;
}
