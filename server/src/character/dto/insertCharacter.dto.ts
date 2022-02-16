import { IsString, MaxLength, IsNumberString } from "class-validator"

export class InsertCharacterDto {
    @IsString()
    @MaxLength(50)
    name: string

    @IsString()
    @MaxLength(255)
    famousQuote: string

    @IsNumberString()
    show: number
}