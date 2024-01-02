import { UserDoc } from './user.modal';
import mongoose from "mongoose";

export interface PostInput {
  user:UserDoc['_id']
  image?:string
  title?:string
  description?:string   
}
export interface PostDoc extends PostInput , mongoose.Document {

          createdAt: Date
          updatedAt:Date
}

const PostSchema = new  mongoose.Schema({
          // postid:  {type:mongoose.Types.ObjectId,required:true,unique:true },
          user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
          image:{type:String,required:true},
          title:{type:String,required:true},
          description:{type:String,required:true},

},{timestamps:true})

export const PostModel = mongoose.model<PostDoc>("Post",PostSchema) 