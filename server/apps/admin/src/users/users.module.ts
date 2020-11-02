import { User } from '@libs/db/models/user.model';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController]
})
export class UsersModule {}
