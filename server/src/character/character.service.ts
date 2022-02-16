import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MyCharacter } from 'src/entities/character.entity';
import { MyShow } from 'src/entities/show.entity';
import { Repository } from 'typeorm';
import { InsertCharacterDto } from './dto/insertCharacter.dto';
import { UpdateCharacterDto } from './dto/updateCharacter.dto';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(MyCharacter)
        private readonly characterRepository: Repository<MyCharacter>
    ) { }


    async getCharacter(id: number) {
        const character = await this.characterRepository.createQueryBuilder('character')
            .select(['character.name', 'show'])
            .leftJoin('character.show', 'show')
            .where(`character.id=${id}`)
            .getMany()
        return character[0]
    }

    async updateCharacter({ id, name, famousQuote, show }: UpdateCharacterDto) {
        const showInstance = new MyShow()
        showInstance.id = show
        await this.characterRepository.update({ id }, { id, name, famousQuote, show: showInstance })
    }

    async insertCharacter(character: InsertCharacterDto) {
        const showInstance = new MyShow()
        showInstance.id = character.show
        await this.characterRepository.insert({ ...character, show: showInstance })
    }
}
