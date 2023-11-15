import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [PrismaModule],
})
export class MembersModule {}
