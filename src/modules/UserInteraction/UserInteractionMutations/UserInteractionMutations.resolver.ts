import { Form } from '@entities/Form.entity';
import { FormResponses } from '@entities/FormResponses.entity';
import { Question } from '@entities/Question.entity';
import { User } from '@entities/User.entity';
import {
  CreateResponse,
  CreateUser, UpdateFormConsentInputs,
  UpdateFormInputs,
  UpdateResponse,
} from '@modules/UserInteraction/UserInteractionMutations/UserInteractionMutations.inputs';
import { UserInteractionMutationsTypes } from '@modules/UserInteraction/UserInteractionMutations/UserInteractionMutations.types';
import {
  SingleAnswerResponse,
  SingleFormResponse,
  SingleUserResponse,
} from '@modules/UserInteraction/UserInteractionQueries/UserInteractionQueries.types';
import { Arg, FieldResolver, Resolver, UseMiddleware } from 'type-graphql';
import { getConnection } from 'typeorm';
import { isAuth } from '@middlewares/isAuth';

@Resolver(() => UserInteractionMutationsTypes)
export class UserInteractionMutationsResolver {
  @FieldResolver(() => UserInteractionMutationsTypes)
  @UseMiddleware([isAuth])
  async startForm(@Arg('userID') userId: string): Promise<SingleFormResponse> {
    try {
      if (!userId) {
        throw new Error('unable to locate the specified user, id not provided');
      }
      const user = await User.findOne({ where: { CognitoPoolId: userId } });
      if (!user) {
        throw new Error('Unable to locate the specified user, try signing up or try again later');
      }
      const createdForm = await Form.create().save();

      await getConnection().createQueryBuilder().relation(Form, 'user').of(createdForm).set(user);
      createdForm.user = user;

      if (!createdForm) {
        throw new Error('Could not create form, try again later');
      }

      return {
        error: false,
        message: '',
        data: createdForm,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => UserInteractionMutationsTypes)
  async createUser(@Arg('UserData') data: CreateUser): Promise<SingleUserResponse> {
    try {
      const { CognitoPoolId, email, name, phone, username } = data;

      if (!CognitoPoolId || !email || !name || !phone || !username) {
        throw new Error('Unable to create user, missing information');
      }

      const newUser = await User.create({
        CognitoPoolId,
        email,
        name,
        phone,
        username,
      }).save();

      return {
        error: false,
        message: '',
        data: newUser,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }

  @FieldResolver(() => UserInteractionMutationsTypes)
  @UseMiddleware([isAuth])
  async updateQuestionResponse(@Arg('updateResponse') data: UpdateResponse): Promise<SingleAnswerResponse> {
    try {
      const { newResponse, questionId } = data;

      const response = await FormResponses.findOne(questionId);

      if (!response) {
        throw new Error('Unable to find question by given identifier');
      }

      await getConnection()
        .createQueryBuilder()
        .update(FormResponses)
        .set({
          response: newResponse,
        })
        .where('id = :id', { id: response.id })
        .execute();
      response.response = newResponse;

      return {
        error: false,
        message: '',
        data: response,
      };
    } catch (err) {
      return {
        error: true,
        message: err.message,
      };
    }
  }

  @FieldResolver(() => UserInteractionMutationsTypes)
  @UseMiddleware([isAuth])
  async updateFormProgress(@Arg('UpdateProgress') data: UpdateFormInputs): Promise<SingleFormResponse> {
    try {
      const { formId, progress } = data;
      if (!formId || !(progress >= 0)) {
        throw new Error('Unable to process the query, missing data');
      }
      const form = await Form.findOne(formId);

      if (!form) {
        throw new Error('Specified form does not exist');
      }
      await getConnection()
        .createQueryBuilder()
        .update(Form)
        .set({
          percentage: progress,
        })
        .where('id = :id', { id: form.id })
        .execute();
      form.percentage = progress;

      return {
        error: false,
        message: '',
        data: form,
      };
    } catch (err) {
      return {
        error: true,
        message: err.message,
      };
    }
  }

  @FieldResolver(() => UserInteractionMutationsTypes)
  @UseMiddleware([isAuth])
  async updateFormConsent(@Arg('UpdateConsent') data: UpdateFormConsentInputs): Promise<SingleFormResponse> {
    try {
      const { formId } = data;
      if (!formId) {
        throw new Error('Unable to process the query, missing data');
      }
      const form = await Form.findOne(formId);

      if (!form) {
        throw new Error('Specified form does not exist');
      }

      await getConnection()
        .createQueryBuilder()
        .update(Form)
        .set({
          consent: true,
        })
        .where('id = :id', { id: form.id })
        .execute();
      form.consent = true;


      return {
        error: false,
        message: '',
        data: form,
      };
    } catch (err) {
      return {
        error: true,
        message: err.message,
      };
    }
  }

  @FieldResolver(() => UserInteractionMutationsTypes)
  @UseMiddleware([isAuth])
  async createResponse(@Arg('createResponseInputs') data: CreateResponse): Promise<SingleAnswerResponse> {
    try {
      const { formId, questionId, response } = data;
      if (!formId || !questionId || !response) {
        throw new Error('Missing Data to create the response');
      }

      const currentForm = await Form.findOne({ where: { id: formId } });

      if (!currentForm) {
        throw new Error('Unable to find the form');
      }

      const respondedQuestion = await Question.findOne({ where: { id: questionId } });

      if (!respondedQuestion) {
        throw new Error('unable to find corresponding question');
      }

      const answer = await FormResponses.create({ response }).save();

      if (!answer) {
        throw new Error('Unable to create the answer, try again later');
      }

      await getConnection().createQueryBuilder().relation(FormResponses, 'form').of(answer).set(currentForm);
      answer.form = currentForm;
      await getConnection().createQueryBuilder().relation(FormResponses, 'question').of(answer).set(respondedQuestion);
      answer.question = respondedQuestion;

      return {
        error: false,
        message: '',
        data: answer,
      };
    } catch (e) {
      return {
        error: true,
        message: e.message,
      };
    }
  }
}
