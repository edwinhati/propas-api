import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateMemberDto } from './member.dto';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}
  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create({
      ...createMemberDto,
      date_of_birth: new Date(createMemberDto.date_of_birth),
    });
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMemberDto: CreateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.membersService.remove(+id);
  }
}
