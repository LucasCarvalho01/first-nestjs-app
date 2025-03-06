import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsInt()
  @IsNotEmpty()
  age: number;
  @IsInt()
  @IsNotEmpty()
  breed: string;
}
