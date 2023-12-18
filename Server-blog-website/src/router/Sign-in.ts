import Validate from "../Middlewares/validateRessources";
import { CreateUserZodShema } from "../Schema/user.schema";
import { CreateUserHander } from "../controller/user.controller";
import { Router } from "express";

export default (router:Router) => {
          router.post("/api/sign-up",Validate(CreateUserZodShema),CreateUserHander);
}