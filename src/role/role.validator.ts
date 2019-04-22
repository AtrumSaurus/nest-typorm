import { IsNotEmpty, IsString, ArrayNotEmpty, ArrayMinSize } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}