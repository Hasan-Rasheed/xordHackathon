import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import { Course } from './product.model'
// const axios = require("axios");
// const siteUrl = "https://remoteok.io/";
@Injectable()
export class ProductService {
    courses: Course[] = [];

    constructor(@InjectModel('Course') private readonly productModel: Model<Course>){}

    
        
// fetchData = async () => {
//   const result = await axios.get(siteUrl);
//   return cheerio.load(result.data);
//     }


    async  insertProduct(courseName: string, url: string, totalDuration: string,content:[],name) {
        // console.log(title,description,price,"secondddddddddd")
        const newProduct = new this.productModel({courseName, url, totalDuration,content,name});
        // console.log(newProduct,"thirddddd")
        const result=await newProduct.save()
        console.log(result)
        return result;
        // return "done"
    }

    async getAllCourses() {
        const result = await this.productModel.find().exec();
        console.log(result)
       
        return result
    }

    async getSingleCourse(courseId: string) {
        const product=await this.productModel.findById(courseId)
        // const product = this.findProduct(productId);
        return product
    }
    async getSinglePersonCourse(email: string) {
        const product=await this.productModel.find({name:email})
        // const product = this.findProduct(productId);
        return product
    }
    

    async updateProduct(productId: string, title: string, description: string, price: number) {
        const updatedProduct=await this.productModel.findOne({_id:productId})
        // const updatedProduct= new this.productModel({title,description,price})
        // const [product,index]=this.findProduct(productId)
        // const updatedProduct={...product}
        if(title){
            updatedProduct.title=title;
        }
        if(description){
            updatedProduct.description=description;
        }
        if(price){
            updatedProduct.price=price;
        }
        const prod=await updatedProduct.save()
        // this.products[index]=updatedProduct;
        return prod
    }

    async deleteProduct(productID){
        const product= await this.productModel.findOneAndDelete({_id:productID})
        // const productIndex=this.findProduct(productID)[1]
        // this.products.splice(productIndex,1)
        return {Message :"Product is Deleted"}
    }


    // private findProduct(productId: string):[Product,number] {
    //     const productIndex = this.products.findIndex((prod) => prod.id == productId)
    //     const prod=this.products[productIndex]
    //     if (!prod) {
    //         throw new NotFoundException('Could not Find Product')
    //     }
    //     return [prod,productIndex] 
    // }
}
