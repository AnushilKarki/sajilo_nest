import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule
    // MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'studentdb'}),
  ],
  controllers: [AppController],
  providers: [AppService,UserService,PostService,PrismaService],
})
export class AppModule {}
