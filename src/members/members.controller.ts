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
import { Public } from 'src/auth/auth.decorator';
import { Roles, Role } from 'src/roles/roles.decorator';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Public()
  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create({
      ...createMemberDto,
      date_of_birth: new Date(createMemberDto.date_of_birth),
    });
  }

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin)
  findOne(@Param('id') id: number) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  update(@Param('id') id: number, @Body() updateMemberDto: CreateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: number) {
    return this.membersService.remove(+id);
  }
}
