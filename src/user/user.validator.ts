import { IsNotEmpty, IsString, ArrayNotEmpty, ArrayMinSize } from 'class-validator';
import { Role } from 'src/role/role.entity';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    @IsNotEmpty()
    readonly username: string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly email: string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly password: string;

    @ApiModelProperty({ type: [Role] })
    @ArrayNotEmpty()
    @ArrayMinSize(2)
    readonly roles: Role[];

    @ApiModelPropertyOptional()
    readonly avatar: string;

}