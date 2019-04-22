import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './user.validator';
import { ApiResponse, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: 200, type: User, isArray: true })
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiResponse({ status: 200, type: User })
  @ApiBadRequestResponse({ type: User })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
}