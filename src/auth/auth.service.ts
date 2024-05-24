import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { Users } from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { userInfo } from 'os';


@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private jwtService: JwtService
    ) { }

    async validadeUser(userName: string, password: string) {
        const user = await this.userService.findOneWithUserName(userName)

        if (user && await (bcrypt.compare(password, user.password))) {
            const { password, ...result } = user
            return result
        }
        return null
    }

    async login(user: Users) {
        const payload = {
            username: user.email,
            sub: {
                name: user.name
            }
        }
        return {
            ...user,
            accessToken: this.jwtService.sign(payload)
        }

    }

}
