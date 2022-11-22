import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Product, Prisma } from '@prisma/client'
@Injectable()
export default class ProductService{
    constructor( private prisma: PrismaService ){}

    async find(
        params: {
            skip?: number,
            take?: number,
            cursor?: Prisma.ProductWhereUniqueInput,
            where?: Prisma.ProductWhereInput,
            orderBy?: Prisma.ProductOrderByWithAggregationInput
        }
    ): Promise< Product[] | null >{
        const {skip, take, cursor, where, orderBy} = params;
        return this.prisma.product.findMany({skip, take, cursor, where, orderBy});
    }

    async create(product: Prisma.ProductCreateInput): Promise< Product >{
        return this.prisma.product.create({data: product});

    }
}