import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMemberDto: CreateMemberDto) {
    return this.prisma.member.create({
      data: createMemberDto,
    });
  }
}
