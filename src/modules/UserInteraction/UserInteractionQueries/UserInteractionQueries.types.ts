import { Form } from '@entities/Form.entity';
import { User } from '@entities/User.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'returns all the forms of a user in the database' })
export class MultipleFormResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field(() => [Form], { nullable: true })
  data?: Form[];
}

@ObjectType({ description: 'returns the user info in the database' })
export class SingleUserResponse {
  @Field()
  error: boolean;
  @Field()
  message: string | '';
  @Field({ nullable: true })
  data?: User;
}

@ObjectType({ description: 'SettingUpForm Functions' })
export class UserInteractionQueriesTypes {
  @Field({ nullable: false })
  listUserForms: MultipleFormResponse;

  @Field({ nullable: false })
  listUserData: SingleUserResponse;
}
