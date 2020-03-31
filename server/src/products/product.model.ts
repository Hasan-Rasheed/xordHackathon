import * as mongoose from 'mongoose';

export const ProductSchema= new mongoose.Schema({

    courseName: {type:String,required:true},
    url: {type:String,required:true},
    totalDuration: {type:String,required:true},
    content:{type:Array,required:true},
    name:{type:String,required:true}
})


export interface Course {
        courseName: string;
        url: string; 
        totalDuration: string; 
        content: [];
        name:string
    }