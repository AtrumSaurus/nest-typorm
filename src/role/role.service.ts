import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './role.validator';
import { Role } from 'src/role/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async create(role: CreateRoleDto): Promise<Role> {
    const newRole = new Role();
    
    newRole.name = role.name;

    return newRole.save();
  }
}