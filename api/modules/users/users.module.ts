import { Module } from '@nestjs/common';
import { UsersService } from './services';
import { UsersController } from './controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
