import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MembersService } from 'src/members/members.service';

@Injectable()
export class AuthService {
  constructor(
    private membersService: MembersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.membersService.findByEmail(username);
    const isPasswordValid = user
      ? await bcrypt.compare(password, user.password)
      : false;
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, name: user.full_name, roles: user.roles };
    const access_token = await this.jwtService.signAsync(payload);
    return { access_token };
  }
}
