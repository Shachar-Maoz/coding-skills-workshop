import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { MyShow } from "./show.entity";

@Entity()
export class MyCharacter {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column({ length: 50 })
    name: string

    @Column({ length: 255 })
    famousQuote: string

    @ManyToOne(() => MyShow, show => show.id)
    @JoinColumn({ name: 'show_id' })
    show: MyShow
}