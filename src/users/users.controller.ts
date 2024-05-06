import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto.ts/users.dto';
import { UserDomain } from './user.domain';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersSevice: UsersService 
    ){}

    @Get()
    async findAllUsers(@Res() response){
        const users = await this.usersSevice.findAllUsers()
        return response.status(200).json(users)
    }

    @Post()
    async createUser(@Res() response, @Body() user: UserDomain){
      const userCreated = await this.usersSevice.createUser(user)
        return response.status(201).json(userCreated)
    }
}
