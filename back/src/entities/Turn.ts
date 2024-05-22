import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "turns",
})
export class Turn {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({ length: 500 })
    description: string;

    @Column({ default: "active" })
    status: string;

    @ManyToOne(() => User, (user) => user.turns)
    user: User;
}
