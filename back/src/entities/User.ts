import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credential";
import { Turn } from "./Turn";

@Entity({
    name: "users",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column({ unique: true })
    nDni: string;

    @Column({ unique: true })
    email: string;

    @Column()
    birthdate: Date;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential;

    @OneToMany(() => Turn, (turn) => turn.user)
    turns: Turn[];
}
