import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LaboratoryUseDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  readonly className: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  readonly academyArea: string;

  @IsString()
  @MinLength(50)
  @IsNotEmpty()
  @ApiProperty()
  readonly career: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly teacher: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly date: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  readonly modality: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly shift: string;

  @IsNumber()
  @IsOptional()
  @MaxLength(10)
  @ApiProperty()
  readonly year: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly semester: string;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly female: number;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly male: number;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty()
  readonly total: number;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty()
  readonly hours: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  readonly isActive: boolean;
}

export class UserPartialTypeDto extends PartialType(LaboratoryUseDto) {}
