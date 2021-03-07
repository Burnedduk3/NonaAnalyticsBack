import { Context } from '@interfaces/Context.types';
import { MiddlewareFn } from 'type-graphql';

export const isAdmin: MiddlewareFn<Context> = async ({ context }, next) => {
  if (!context.payload) {
    throw new Error('not FormSetUp');
  }
  if (context.payload.role !== 'admin') {
    throw new Error('not FormSetUp');
  }
  return next();
};
