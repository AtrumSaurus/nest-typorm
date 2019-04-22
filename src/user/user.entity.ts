import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinTable, ManyToMany} from "typeorm";
import { Role } from "../role/role.entity";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import { type } from "os";

@Entity()
export class User extends BaseEntity {

    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column()
    username: string;

    @ApiModelProperty()
    @Column()
    email: string;

    @ApiModelProperty()
    @Column()
    password: string;

    @ApiModelPropertyOptional()
    @Column()
    avatar: string;

    @ApiModelProperty({ type: [Role] })
    @ManyToMany(type => Role)
    @JoinTable()
    roles: Role[];

}