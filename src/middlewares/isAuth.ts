import { Context } from '@interfaces/Context.types';
import { CognitoJwtVerifier } from 'aws-cognito-jwt-verifier';
import { MiddlewareFn } from 'type-graphql';

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  try {
    const accessTokenInHeader = context.req.headers.authorization;
    if (!accessTokenInHeader) throw new Error('No authenticated');

    const verify = new CognitoJwtVerifier();
    const result = await verify.checkJwt(accessTokenInHeader, 'us-east-1', 'us-east-1_SqEmScTyR');
    const data = JSON.parse(result)
    if (!data.status || data.code === 401) {
      throw new Error('token not valid');
    }
    context.payload = { ...result };
  } catch (e) {
    throw new Error(e.message);
  }
  return next();
};
