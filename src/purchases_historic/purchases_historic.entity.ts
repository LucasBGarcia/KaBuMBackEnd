import { Products } from 'src/products/products.entity';
import { Users } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm'

@Entity({ name: 'purchases_historic' })
export class Purchases_historic {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(() => Products)
    @JoinTable()
    products: Products[]

    @ManyToOne(() => Users, (user) => user.purchase_historic)
    user: Users

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}