import { UUID } from "node:crypto";

export class SignInDto {
  id: UUID;
  pwd: string;
}