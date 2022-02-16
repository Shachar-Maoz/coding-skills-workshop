import { IsNumberString, IsString, MaxLength, IsInt } from 'class-validator'
import { Type } from 'class-transformer'

export class UpdateCharacterDto {
    @IsInt()
    id: number

    @IsString()
    @MaxLength(50)
    name: string

    @IsString()
    @MaxLength(255)
    famousQuote: string

    @IsNumberString()
    show: number
}