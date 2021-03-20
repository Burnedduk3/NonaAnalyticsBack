import { User } from '@entities/User.entity';
import { ListUserFormsInputs } from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.inputs';
import {
  MultipleFormResponse,
  SingleUserResponse,
  UserInteractionQueriesTypes,
} from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.types';
import { Arg, FieldResolver, Resolver } from 'type-graphql';

@Resolver(() => UserInteractionQueriesTypes)
export class UserInteractionQueriesResolver {
  @FieldResolver(() => UserInteractionQueriesTypes)
  async listUserForms(@Arg('UserId') data: ListUserFormsInputs): Promise<MultipleFormResponse> {
    try {
      const { userCognitoId } = data;

      if (!userCognitoId) {
        throw new Error('No able to retrieve user forms');
      }
      const user = await User.findOne({
        relations: ['forms'],
        where: {
          CognitoPoolId: userCognitoId,
        },
      });

      if (!user) {
        throw new Error('No able to retrieve user forms');
      }

      return {
        error: false,
        message: '',
        data: user.forms,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => UserInteractionQueriesTypes)
  async listUserData(@Arg('UserId') data: ListUserFormsInputs): Promise<SingleUserResponse> {
    try {
      const { userCognitoId } = data;

      if (!userCognitoId) {
        throw new Error('No able to retrieve user forms');
      }
      const user = await User.findOne({
        relations: ['forms'],
        where: {
          CognitoPoolId: userCognitoId,
        },
      });

      if (!user) {
        throw new Error('No able to retrieve user forms');
      }

      return {
        error: false,
        message: '',
        data: user,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }
}
