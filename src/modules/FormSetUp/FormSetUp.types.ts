import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'FormSetUp Functions' })
export class FormSetUpTypes {
  @Field({nullable: true})
  Qestions: string;

}