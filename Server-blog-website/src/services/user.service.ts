import mongoose from "mongoose";
import { UserInput, UserModal } from "../Modals/user.modal";
import { omit } from "lodash";

export async function CreateUser(input:UserInput){
try{
          return await UserModal.create(input);

}catch(error){
          if(error instanceof mongoose.Error.ValidationError){
                    throw new Error("validation Error" + error.message)
          }
          else{
                    throw new Error('Unexpected error: ' + error.message);
          }
}
}

export async function ValidatePassword({email,password}:{email:String,password:String}){

          const user=await UserModal.findOne({email});
          
          if(!user) return false;
       
          return omit(user.toJSON(),"password");

}