import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('marca')
@Unique(['id'])

export class Marca {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    nombre: string;

    @Column({ type: 'varchar', length: 255, nullable: true})
    descripcion: string;
}