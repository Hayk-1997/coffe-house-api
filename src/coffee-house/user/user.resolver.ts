import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  getHello(): string {
    return 'Hello NestJs';
  }
}
