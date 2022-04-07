import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

// const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://maestro:maestropasswd@cluster0.xmxew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      // 'mongodb+srv://bancoteste:teste1992@cluster0.yzedg.mongodb.net/test',
      // 'mongodb://localhost:27017/db?authSource=admin&readPreference=primary',
      // 'mongodb://mongodb:3000/DB',
      // `mongodb://testing:12345678@docdb-2022-04-06-17-28-37.cblscjwbivbz.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&retryWrites=false`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
