import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MyCharacter } from "./character.entity";

@Entity()
export class MyShow {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 20 })
    name: string

    @OneToMany(() => MyCharacter, character => character.id)
    characters: MyCharacter[]

}