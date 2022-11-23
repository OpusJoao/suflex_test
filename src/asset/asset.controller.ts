import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { parse } from 'papaparse';
import ProductService from 'src/product/product.service';

@Controller('asset')
export class AssetController {
    constructor(private readonly productService: ProductService){}
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFileToDatabase(@UploadedFile() file: Express.Multer.File) {
        const csvData = file.buffer.toString()
        
        parse(csvData, {
            header: true,
            skipEmptyLines: true,
            transformHeader: header => header.toLowerCase().trim(),
            step: async (result) => { return await this.createItemInDatabase(result.data)},
            complete: result => result.data,
        })

        return {
            message: 'Creation in process'
        };
    }

    private async createItemInDatabase(data){
        const { name, dias_para_vencimento } = data;
        return this.productService.create({name, daysToExpiration: Number(dias_para_vencimento)})
    }
}
