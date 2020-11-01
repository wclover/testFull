import { User } from '@libs/db/models/user.model';
import { Module } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UsersController } from './users.controller';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model: User
})
@Module({
  controllers: [UsersController]
})
export class UsersModule {
    constructor(@InjectModel(User) private readonly model){}
}
