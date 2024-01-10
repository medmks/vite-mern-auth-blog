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