import { Controller, Get, Post, Req, Header, Param, Body, Query, Delete } from '@nestjs/common';
import { Request } from 'express'
import { CreateCatDto } from 'src/cats/DTOs/create-cat.dto';
import { CatsService } from './cats.services';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(@Req() request: Request): Cat[] {
    return this.catsService.findAll();
  }

  @Get()
  async findAllWithQueryParams(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  @Get(':id')
  findOne(@Param() id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
}

  @Post()
  @Header('Cache-Control', 'no-store')
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
