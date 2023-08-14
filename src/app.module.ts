import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi'
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MYSQL_HOST:Joi.string().required(),
        MYSQL_PORT:Joi.number().required(),
        MYSQL_USER:Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_DATABASE:Joi.string().required(),
      })
    }),
    DatabaseModule,
    TodoModule
],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
