import { Controller, Get, HttpException, UseGuards } from "@nestjs/common";
import { RolesGuard } from "src/guards/roles.guard";

@Controller('admin')
@UseGuards(RolesGuard)
export class AdminController {
  @Get()
  async getDetailedInfo(): Promise<any> {
    return new Promise((_, reject) => {
      setTimeout(() => {
        console.log('This request is taking too long');
      }, 6000);
    });
  }
}