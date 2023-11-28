import { IsString, IsEmail, Length, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { Role } from 'src/roles/roles.decorator';

export class CreateMemberDto {
  @Length(16, 16)
  nik: string;

  @IsString()
  full_name: string;

  @IsString()
  place_of_birth: string;

  date_of_birth: Date;

  @IsString()
  gender: string;

  @IsString()
  province: string;

  @IsString()
  regency: string;

  @IsString()
  district: string;

  @IsString()
  village: string;

  @IsString()
  address: string;

  @IsString()
  marital_status: string;

  @Length(10, 13)
  phone_number: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsArray()
  roles: Role[];
}

export class UpdateMemberDto extends PartialType(CreateMemberDto) {}
