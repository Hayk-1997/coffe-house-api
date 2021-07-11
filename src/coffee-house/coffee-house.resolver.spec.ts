import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeHouseResolver } from './coffee-house.resolver';

describe('CoffeeHouseResolver', () => {
  let resolver: CoffeeHouseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeHouseResolver],
    }).compile();

    resolver = module.get<CoffeeHouseResolver>(CoffeeHouseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
