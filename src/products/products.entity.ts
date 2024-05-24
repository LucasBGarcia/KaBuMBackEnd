import { Brands } from 'src/brands/brands.entity';
import { Cart } from 'src/cart/cart.entity';
import { Categories } from 'src/categories/categories.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'

@Entity({ name: 'products' })
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'description', nullable: false })
    description: string;

    @Column({ name: 'value', nullable: false })
    value: number;

    @Column({ name: 'times_visited' })
    times_visited: number;

    @ManyToOne(() => Categories, (catagorie) => catagorie.products)
    categorie: Categories

    @ManyToOne(() => Brands, (brand) => brand.products)
    brand: Brands

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}