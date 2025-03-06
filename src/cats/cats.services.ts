import { HttpException, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { UUID } from 'node:crypto';
import { CreateCatDto } from './DTOs/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    const newCat = {
      id: crypto.randomUUID(),
      ...cat,
    };
    this.cats.push(newCat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: UUID): Cat {
    const cat = this.cats.find(cat => cat.id === id);
    if (!cat) {
      throw new HttpException('Cat not found', 404);
    }
    return cat;
  }
  // delete(id: string) {
  //   let idNumber: number;
  //   try {
  //     idNumber = parseInt(id);
  //   } catch (error) {
  //     throw new HttpException 'Invalid ID';
  //   }
  //   this.cats.splice(id, 1);
  // }
}