import { Controller, Get, Query } from "@nestjs/common";
import ProductService from "./product.service";

@Controller('product')
export default class ProductController{
    constructor(private readonly productService: ProductService){}

    @Get()
    async findAll(@Query() query){
        const { sort, daysToExpire } = query;
        let sortLower = sort.toLowerCase();
        let whereQuery = daysToExpire ? {
            daysToExpiration: {
                equals: Number(daysToExpire)
            }
        } : {}
        if(sortLower !== 'asc' && sortLower !== 'desc') sortLower = 'asc'

        return await this.productService.find({
            where: whereQuery, 
            orderBy: { name: sortLower }
        } );
    }


}