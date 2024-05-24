import { Products } from 'src/products/products.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'brands' })
export class Brands {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @OneToMany(() => Products, (product) => product.brand)
    products: Products[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}