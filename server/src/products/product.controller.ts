import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('course')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addProduct(
  @Body('courseName') courseName:string, 
  @Body('url') url:string,
  @Body('totalDuration') totalDuration:string,
  @Body('content') content:[], 
  @Body('name') name:string,
  ) {
    //   console.log(producTitle,productDescription,productPrice,"Firsttt")
    const res= await this.productService.insertProduct(courseName,url,totalDuration,content,name);
    return {result:res}
}

    @Get()
   async getAllProducts(){
        const product= await this.productService.getAllCourses();
        return product
    }

    @Get(':id')
    async getSingleCourse(@Param('id') courseId:string){
        const product= await this.productService.getSingleCourse(courseId);
        return product
    }

    @Post('/email')
    async getSinglePersonCourse(@Body('email') email:string){
        const product= await this.productService.getSinglePersonCourse(email);
        return product
    }



    @Patch(':id')
    async updateProduct(
    @Param('id') productId:string,
    @Body('title') producTitle:string,
    @Body('description') productDescription:string,
    @Body('price') productPrice:number,){
        const product=await this.productService.updateProduct(productId,producTitle,productDescription,productPrice);
        return product
        }

    @Delete(':id')
    async deleteProduct(@Param('id') prodId:string){
       const product= await this.productService.deleteProduct(prodId);
        return product
    }
}
