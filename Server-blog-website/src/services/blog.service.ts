import { BLogInput } from './../Models/Blog.model';
import { Blogmodel } from "../Models/Blog.model";
import mongoose from 'mongoose';

export async function createNewBlog(inputs:BLogInput){
try{
          return await Blogmodel.create(inputs)
          
}catch(error){
          if(error instanceof mongoose.Error.ValidationError){
                    throw new Error("ValidatorError" + error.message )
                   }
               else{
                   throw new Error ("Unxpected Error" + error.message)
               }
}

}

export async function GetLatestblogs(){
    try{

        const blogs = await Blogmodel.find({draft:false}) 
          .populate("author","name")
          .sort({"createdAt":-1})
          .select("blog_id tags createdAt description title activity banner -_id ")
          .limit(5)
       
          return blogs
    }
    catch(error){
                      throw new Error ("Unxpected Error" + error.message)

    }
}