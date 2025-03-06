import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  age: number;
  email: string;
}
