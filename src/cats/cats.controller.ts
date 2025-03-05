import { Controller, Get, Post, Req, Header, Param, Body, Query } from '@nestjs/common';
import { Request } from 'express'
import { CreateCatDto } from 'src/DTOs/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
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
  async create(@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

}
