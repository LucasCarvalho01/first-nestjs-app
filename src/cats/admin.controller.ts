import { Controller, Get, HttpException } from "@nestjs/common";

@Controller('admin')
export class AdminController {
  @Get()
  getDetailedInfo(): string {
    throw new HttpException('Forbidden', 403);
  }
}