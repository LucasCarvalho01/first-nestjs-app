import { UUID } from "node:crypto";

export interface Cat {
  id: UUID;
  name: string;
  age: number;
  breed: string;
}
