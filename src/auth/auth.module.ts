import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/user.entity';

@Module({
  providers: [AuthService, UsersService,  LocalStrategy, UsersService],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: process.env.jwt_secret,
      signOptions: { expiresIn: "28800s" },

    })
  ]
})
export class AuthModule { }
