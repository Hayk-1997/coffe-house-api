import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  getHello(): string {
    console.log(process.env.MONGO_URL);
    return 'Hello NestJs';
  }
}
