import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { CreateRoleDto } from './role.validator';
import { ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiResponse({ status: 200, type: Role, isArray: true })
  @Get()
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() createroleDto: CreateRoleDto): Promise<Role> {
    return this.roleService.create(createroleDto);
  }
}