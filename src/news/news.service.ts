import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNewsDto, UpdateNewsDto } from './news.dto';

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createNewsDto: CreateNewsDto) {
    return this.prisma.news.create({
      data: createNewsDto,
    });
  }

  findAll() {
    return this.prisma.news.findMany();
  }

  findOne(id: string) {
    return this.prisma.news.findUnique({
      where: { id },
    });
  }

  update(id: string, updateNewsDto: UpdateNewsDto) {
    return this.prisma.news.update({
      where: { id },
      data: updateNewsDto,
    });
  }

  remove(id: string) {
    return this.prisma.news.delete({
      where: { id },
    });
  }
}
