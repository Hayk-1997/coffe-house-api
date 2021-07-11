import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeHouseModule } from './coffee-house/coffee-house.module';

@Module({
  imports: [CoffeeHouseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
