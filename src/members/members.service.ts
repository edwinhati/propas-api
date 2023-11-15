import { Injectable } from '@nestjs/common';
import { CreateMemberDto, UpdateMemberDto } from './member.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMemberDto: CreateMemberDto) {
    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(
      createMemberDto.password,
      saltOrRounds,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...data } = createMemberDto;

    const memberData = {
      ...data,
      password: passwordHash,
    };

    return this.prisma.member.create({
      data: memberData,
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
