import { Category } from '@entities/Category.entity';
import {
  byeWorldResponse,
  SettingUpFormQueriesResponse,
  SettingUpFormQueriesTypes,
} from '@modules/SettingUpForm/SettingUpFormQueries/SettingUpFormQueries.types';
import { FieldResolver, Resolver } from 'type-graphql';

@Resolver(() => SettingUpFormQueriesTypes)
export class SettingUpFormQueriesResolver {
  @FieldResolver(/* istanbul ignore next */ () => SettingUpFormQueriesTypes) // without args
  async helloWorld(): Promise<SettingUpFormQueriesResponse> {
    return {
      data: 'hello world',
      error: false,
      message: 'hello nico',
    };
  }

  @FieldResolver(() => SettingUpFormQueriesTypes)
  async byeWorld(): Promise<byeWorldResponse> {
    const category = await Category.create({
      name: 'testWithCa4t',
    }).save();

    if (!category) {
      throw new Error('could not create category');
    }

    const createdCategory = await Category.find();

    if (!createdCategory) {
      throw new Error('could not create category');
    }

    return {
      message: 'bye nico',
      error: true,
      data: createdCategory,
    };
  }

  @FieldResolver(/* istanbul ignore next */ () => SettingUpFormQueriesTypes) // without args
  async TestingDifferent(): Promise<SettingUpFormQueriesResponse> {
    const category = await Category.create({
      name: 'testWithCa5t',
    }).save();

    if (!category) {
      throw new Error('could not create category');
    }

    const createdCategory = await Category.find();

    if (!createdCategory) {
      throw new Error('could not create category');
    }

    return {
      message: 'bye nico',
      error: true,
      data: JSON.stringify(createdCategory),
    };
  }
}
