import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'node:crypto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: UUID) {
    try {
      return await this.userRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new Error(`User with id ${id} not found`);
    }
  }

  async remove(id: UUID) {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }
}
