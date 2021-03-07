import { FieldResolver, Resolver } from 'type-graphql';
import {
  SettingUpFormQueriesTypes,
  SettingUpFormQueriesResponse,
  byeWorldResponse,
} from '@modules/SettingUpForm/SettingUpFormQueries/SettingUpFormQueries.types';
import { Category } from '@entities/Category.entity';

@Resolver(() => SettingUpFormQueriesTypes)
export class SettingUpFormQueriesResolver {
  @FieldResolver(/* istanbul ignore next */ () => SettingUpFormQueriesTypes) // without args
  async helloWorld(): Promise<SettingUpFormQueriesResponse> {
    return {
      data: "hello world",
      error: false,
      message: "hello nico"
    }
  }

  @FieldResolver(()=> SettingUpFormQueriesTypes)
  async byeWorld(): Promise<byeWorldResponse>{
    let category = await Category.create({
      name: "testWithCa4t",
    }).save();

    if(!category){
      throw new Error ("could not create category")
    }

    let createdCategory = await Category.find();

    if(!createdCategory){
      throw new Error ("could not create category")
    }

    return {
      message: "bye nico",
      error: true,
      data: createdCategory
    }
  }

  @FieldResolver(/* istanbul ignore next */ () => SettingUpFormQueriesTypes) // without args
  async TestingDifferent(): Promise<SettingUpFormQueriesResponse> {
    let category = await Category.create({
      name: "testWithCa5t",
    }).save();

    if(!category){
      throw new Error ("could not create category")
    }

    let createdCategory = await Category.find();

    if(!createdCategory){
      throw new Error ("could not create category")
    }

    return {
      message: "bye nico",
      error: true,
      data: JSON.stringify(createdCategory)
    }
  }
}