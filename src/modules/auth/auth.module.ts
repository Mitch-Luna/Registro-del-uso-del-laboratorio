import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import {
  RolesService,
  UsersService,
  AsignarRolesService,
  AuthService,
} from './services';
import {
  AuthController,
  RolesController,
  UsersController,
  AsignarRolesController,
} from './controllers';
import { User, Role, } from './entities';
import { UseLabController } from '../laboratory-use/controller/use-lab.controller';
import { UseLabService } from '../laboratory-use/services/use-lab.service';
import { LaboratoryUse } from '../laboratory-use/entities';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, LaboratoryUse]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '24h',
          },
        };
      },
    }),
  ],
  controllers: [
    AuthController,
    RolesController,
    UsersController,
    AsignarRolesController,
    UseLabController
  ],
  providers: [
    AuthService,
    UsersService,
    JwtStrategy,
    RolesService,
    AsignarRolesService,
    UseLabService
  ],
  exports: [TypeOrmModule, JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule { }
