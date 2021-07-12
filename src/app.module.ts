import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeHouseModule } from './coffee-house/coffee-house.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    CoffeeHouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
