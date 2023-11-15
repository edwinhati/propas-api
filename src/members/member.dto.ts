import { IsString, IsDate, IsEmail } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  nik: string;

  @IsString()
  full_name: string;

  @IsString()
  place_of_birth: string;

  // @IsDate()
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

  phone_number: string;

  @IsEmail()
  email: string;
}
