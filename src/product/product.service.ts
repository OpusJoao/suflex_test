import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Product, Prisma } from '@prisma/client'
@Injectable()
export default class ProductService{
    private readonly logger = new Logger(ProductService.name);
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
        let products
        
        try{
            products = await this.prisma.product.findMany({skip, take, cursor, where, orderBy});
        }catch(e){
            this.logger.error(`Error trying to get products: ${e.message}`);
        }

        return products;
    }

    async create(product: Prisma.ProductCreateInput): Promise< Product >{
        try{
            return this.prisma.product.create({data: product});
        }catch(e){
            this.logger.error(`Error trying to create product: ${e.message}`);
        }
        return 
    }

    async update(params: { where: Prisma.ProductWhereUniqueInput, data: Prisma.ProductUpdateInput }): Promise< Product >{
        const {where, data} = params;

        return this.prisma.product.update({data, where}); 
    }

    async createOrUpdate(product: Prisma.ProductCreateInput): Promise< Product >{
        try{
            const productFinded = await this.find({where: {name:{equals: product.name}}});
            if(productFinded){
                return await this.update({where: {id: productFinded[0].id}, data: product})
            }else{
                return await this.create(product)
            }
        }catch(e){
            this.logger.error(`Error trying to create product: ${e.message}`);
        }
        return

    }
}