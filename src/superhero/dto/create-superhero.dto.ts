/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsArray, IsEnum } from 'class-validator';

enum TypeCharacter {
  Heroe = 'Heroe',
  Villian = 'Villian',
}

export class CreateSuperheroDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum(TypeCharacter)
  typeCharacter: TypeCharacter;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsArray()
  @IsNotEmpty()
  powers: string[];
}
