import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import dotenv from 'dotenv';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TaskModule,
        MongooseModule.forRoot(process.env.URL_MONGO),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
