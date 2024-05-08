import { Categories } from 'src/categories/categories.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'

@Entity({ name: 'subcategories' })
export class Subcategories {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    // @Column({name: 'cart'}) //relacionamento com itens do estoque
    // cart:string;
    //criar 2 tabelas para cart e purchased e relacionar com essa
    // @Column({name: 'purchased'}) //relacionamento com itens do estoque
    // purchased:string;


    @ManyToOne(() => Categories, (categorie) => categorie.subcategories)
    categorie: Categories

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}