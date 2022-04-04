import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://bancoteste:teste1992@cluster0.yzedg.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
