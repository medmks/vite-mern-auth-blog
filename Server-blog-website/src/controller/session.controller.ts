import Validate from "Middlewares/validateRessources";
import { Request,Response } from "express";
import { ValidatePassword } from "../services/user.service";
import { createSession } from "../services/session.service";

export async function craeteSessionHandler(req:Request,res:Response){

// Todo:Validate user's password

const user = await ValidatePassword(req.body)
if(!user) return res.status(401).send("invalid Email or password");

// Todo:Create Session

const CreateSession= createSession(user._id, req.get("user-agent") || "")

//TODO: Create Access Token


//TODO: Create Refresh Token


// Todo:Return access and refresh token



}