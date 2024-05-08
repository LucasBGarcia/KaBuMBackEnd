import { Products } from 'src/products/products.entity';
import { Subcategories } from 'src/subcategories/subcategories.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'

@Entity({ name: 'categories' })
export class Categories {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @OneToMany(() => Subcategories, (subcategorie) => subcategorie.categorie)
    subcategories: Subcategories[]

    @OneToMany(() => Products, (product) => product.categorie)
    products: Products[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}