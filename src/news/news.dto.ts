import { PartialType } from '@nestjs/swagger';

export class CreateNewsDto {
  title: string;
  content: string;
  media: string;
  source: string;
}

export class UpdateNewsDto extends PartialType(CreateNewsDto) {}
