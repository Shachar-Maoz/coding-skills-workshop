import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyCharacter } from 'src/entities/character.entity';
import { MyShow } from 'src/entities/show.entity';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
  imports: [TypeOrmModule.forFeature([MyCharacter, MyShow])],
  controllers: [CharacterController],
  providers: [CharacterService]
})
export class CharacterModule { }
