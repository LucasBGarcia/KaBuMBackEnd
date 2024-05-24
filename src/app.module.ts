import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from './cart/cart.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { UsersModule } from './users/users.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { PurchasesHistoricModule } from './purchases_historic/purchases_historic.module';
import { BrandsModule } from './brands/brands.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      logging: false,
      migrations: [__dirname + '/database/migrations/*{.js,.ts}'],
      entities: [__dirname + '/**/*.entity{.js,.ts}']
    }),
    UsersModule,
    CartModule,
    ProductsModule,
    CategoriesModule,
    SubcategoriesModule,
    PurchasesHistoricModule,
    BrandsModule
  ],
  controllers: [CategoriesController],
  providers: [ProductsService],
})
export class AppModule { }
