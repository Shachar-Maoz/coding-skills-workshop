import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { InsertCharacterDto } from './dto/insertCharacter.dto';
import { UpdateCharacterDto } from './dto/updateCharacter.dto';

@Controller('character')
export class CharacterController {
    constructor(
        private readonly characterService: CharacterService
    ) { }

    @Get('get-character/:id')
    async getCharacter(@Param('id') id: number) {
        return await this.characterService.getCharacter(id)
    }

    @Post('update-character')
    async updateCharacter(@Body() character: UpdateCharacterDto) {
        return await this.characterService.updateCharacter(character)
    }

    @Post('insert-character')
    async insertCharacter(@Body() character: InsertCharacterDto) {
        return await this.characterService.insertCharacter(character)
    }

}
