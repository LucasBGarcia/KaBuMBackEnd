export class ProductsDto {
    readonly id?:string;
    readonly name: string;
    readonly description: string;
    readonly value: number;
    readonly times_visited?: number;
    readonly createdAt?: string;
    readonly updatedAt?: string;
}
