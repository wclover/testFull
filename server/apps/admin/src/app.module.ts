import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from 'libs/common/src';

const MAO = require('multer');

@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({  // 阿里云oss
            config: {
              region: 'oss-cn-hangzhou',
              accessKeyId: '<acessKeyId>',
              accessKeySecret: '<accessKeySecret>',
              bucket: 'topfullstack'
            }
          })
        }
      }
    }),
    MulterModule.register({
      dest: 'uploads' // 本地
      // storage: MAO({  // 阿里云oss
      //   config: {
      //     region: 'oss-cn-hangzhou',
      //     accessKeyId: '<acessKeyId>',
      //     accessKeySecret: '<accessKeySecret>',
      //     bucket: 'topfullstack'
      //   }
      // })
    }),
    // DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
