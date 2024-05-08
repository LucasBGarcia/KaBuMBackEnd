import { Cart } from 'src/cart/cart.entity';
import { Purchases_historic } from 'src/purchases_historic/purchases_historic.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm'

@Entity({ name: 'users' })
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'email', nullable: false, unique: true })
    email: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @OneToOne(() => Cart)
    @JoinColumn()
    cart: Cart

    @OneToMany(() => Purchases_historic, (purchases_historic) => purchases_historic.user)
    purchase_historic: Purchases_historic[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}