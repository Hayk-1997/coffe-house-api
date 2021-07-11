import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class CoffeeHouseResolver {
  @Query(() => String)
  getHello(): string {
    return 'Hello NestJs';
  }
}
