import { UserInteractionMutationsTypes } from '@modules/UserInteraction/UserInteractionMutations/UserInteractionMutations.types';
import {
  MultipleFormResponse,
  SingleUserResponse,
} from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.types';
import { FieldResolver, Resolver } from 'type-graphql';

@Resolver(() => UserInteractionMutationsTypes)
export class UserInteractionMutationsResolver {
  @FieldResolver(() => UserInteractionMutationsTypes)
  async createForm(): Promise<MultipleFormResponse> {
    try {
      return {
        error: false,
        message: '',
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => UserInteractionMutationsTypes)
  async createResponse(): Promise<SingleUserResponse> {
    try {
      return {
        error: false,
        message: '',
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => UserInteractionMutationsTypes)
  async createUser(): Promise<SingleUserResponse> {
    try {
      return {
        error: false,
        message: '',
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }
}
