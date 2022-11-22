import { Controller, Get } from "@nestjs/common";
import ProductService from "./product.service";

@Controller('product')
export default class ProductController{
    constructor(private readonly productService: ProductService){}

    @Get()
    async findAll(){
        return await this.productService.find({});
    }

}