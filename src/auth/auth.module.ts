import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MembersModule } from 'src/members/members.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    MembersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_CONSTANT,
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModule {}
