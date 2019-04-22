import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.validator';
import { Role } from 'src/role/role.entity';
import {In} from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({relations: ['roles']});
  }

  async create(userBody: CreateUserDto): Promise<User> {
    const user = new User();
    
    user.avatar = userBody.avatar;
    user.password = userBody.password;
    user.username = userBody.username;
    user.email = userBody.email;

    user.roles = await Role.find({ id: In(userBody.roles.map(role => role.id)) });

    await user.save();

    return user;
  }
}