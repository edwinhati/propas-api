import { Injectable } from '@nestjs/common';
import { CreateMemberDto, UpdateMemberDto } from './member.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMemberDto: CreateMemberDto) {
    try {
      // Check if the password is not null before hashing
      const passwordHash = createMemberDto.password
        ? await bcrypt.hash(createMemberDto.password, 10)
        : null;

      // Generate the ID
      const id = await this.generateId();

      // Destructure the password property and use the rest of the properties
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...data } = createMemberDto;

      // Use the hashed password if it is not null, otherwise, use null
      const memberData = {
        ...data,
        password: passwordHash,
        id,
      };

      return this.prisma.member.create({
        data: memberData,
      });
    } catch (error) {
      // Handle the error by generating a new ID
      const id = await this.generateId();
      const memberData = {
        ...createMemberDto,
        id,
      };

      return this.prisma.member.create({
        data: memberData,
      });
    }
  }

  findAll() {
    return this.prisma.member.findMany();
  }

  findOne(id: number) {
    return this.prisma.member.findUnique({
      where: { id },
    });
  }

  findByEmail(email: string) {
    return this.prisma.member.findUnique({
      where: { email },
    });
  }

  async generateId() {
    const lastId = (await this.findAll()).length;
    return lastId + 1;
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
