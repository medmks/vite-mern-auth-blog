import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { UserDoc } from "./user.modal";

export interface BLogInput {
          author: UserDoc["_id"],    
          title?: string,
          banner?: string,
          description?: string,
          content?: [],
          tags?: string[],
}

export interface BlogDocument extends BLogInput ,mongoose.Document{
          createdAt: Date
          updatedAt:Date
          activity: {
                    total_likes:Number ,
                    total_comments:Number,
                    total_reads: Number,
                    total_parent_comments: Number
                },
}

const BlogSchema = new mongoose.Schema({
          blog_id: {
                    type: String,
                    required: true,
                    unique: true,
                    default: () => `blog_${uuidv4()}`
                },
                title: {
                    type: String,
                    required: true,
                },
                banner: {
                    type: String,
                    // required: true,
                },
                des: {
                    type: String,
                    // required: true
                },
                content: {
                    type: [],
                    // required: true
                },
                tags: {
                    type: [String],
                    // required: true
                },
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'User'
                },
                activity: {
                    total_likes: {
                        type: Number,
                        default: 0
                    },
                    total_comments: {
                        type: Number,
                        default: 0
                    },
                    total_reads: {
                        type: Number,
                        default: 0
                    },
                    total_parent_comments: {
                        type: Number,
                        default: 0
                    },
                },
          //       comments: {
          //           type: [Schema.Types.ObjectId],
          //           ref: 'comments'
          //       },
                draft: {
                    type: Boolean,
                    default: false
                }
            
            },{timestamps:true}
)

export const Blogmodel = mongoose.model("Blog",BlogSchema)