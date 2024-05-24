import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm'
import { UserDomain } from './user.domain';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ) { }

    async findAllUsers(): Promise<Users[]> {
        const users = await this.usersRepository.find();
        if (users.length === 0) throw new HttpException('Users not found', HttpStatus.NOT_FOUND)

        return users
    }

    async findOneWithUserName(userName: string) {
        return await this.usersRepository.findOne({ where: { email: userName } });
    }

    async createUser(user: UserDomain): Promise<UserDomain> {
        console.log(user)
        const createUser = await this.usersRepository.save(user);
        return createUser;
    }
}
