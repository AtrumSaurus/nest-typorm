import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable, Unique} from "typeorm";
import { User } from "../user/user.entity";
import { ApiModelProperty } from "@nestjs/swagger";

@Unique(['name'])
@Entity()
export class Role extends BaseEntity {

    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    name: string;

    @ManyToMany(type => User)
    users: User[];

}