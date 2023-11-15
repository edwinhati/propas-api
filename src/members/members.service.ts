import { Injectable } from '@nestjs/common';
import { CreateMemberDto, UpdateMemberDto } from './member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMemberDto: CreateMemberDto) {
    return this.prisma.member.create({
      data: createMemberDto,
    });
  }

  findAll() {
    return this.prisma.member.findMany();
  }

  findOne(id: number) {
    return this.prisma.member.findUnique({
      where: { id },
    });
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return this.prisma.member.update({
      where: { id },
      data: updateMemberDto,
    });
  }

  remove(id: number) {
    return this.prisma.member.delete({
      where: { id },
    });
  }
}
