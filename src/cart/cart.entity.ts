import { Products } from 'src/products/products.entity';
import { Users } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm'

@Entity({ name: 'cart' })
export class Cart {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Products)
    @JoinTable()
    products: Products[]

    // @OneToOne(() => Users, (user) => user.cart)
    // user: Users

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}