
import { Query, Resolver } from 'type-graphql';
import { FormSetUpTypes } from './FormSetUp.types';

@Resolver(/* istanbul ignore next */() => FormSetUpTypes)
export class FormSetUpResolver {
  @Query(/* istanbul ignore next */() => FormSetUpTypes)
  // @UseMiddleware([isAuth, isAdmin])
  admin(): FormSetUpTypes {
    return new FormSetUpTypes();
  }
}
