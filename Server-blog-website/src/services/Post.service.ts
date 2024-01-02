import mongoose, { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { PostDoc, PostInput, PostModel } from "../Models/Post.Model";

export async function CreatePost(input:PostInput) {
          try{
                   return await  PostModel.create(input)
                    
                    
          }catch(error){
                    if(error instanceof mongoose.Error.ValidationError) throw new Error("ValidatorError" + error.message )
                    else{
                    throw new Error ("Unxpected Error" + error.message)
                    }
          }
}
export async function FindPost(query:FilterQuery<PostDoc>,options:QueryOptions = {lean:true}) {
const post = await PostModel.findOne(query,{},options)

      return post
}
export async function FindandUpdatePost(query:FilterQuery<PostDoc>, update:UpdateQuery<PostDoc>, options:QueryOptions) {
          return PostModel.findOneAndUpdate(query,update,options) 
}
export async function DeletePost(query:FilterQuery<PostDoc>) {
          return PostModel.deleteOne(query)
}