import { Request, Response, NextFunction } from 'express'
import { get } from 'lodash';
import { verifyJwt } from '../utils/jwt.utils';
const deserializeUser = (req:Request, res:Response, next:NextFunction) => {
  const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");
  const refreshToken = get(req, "headers.x-refresh");
    console.log("accessToken" + accessToken);
    
  if (!accessToken) {
    console.log("No access token provided");
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);



  if (decoded) {
    console.log("Access token decoded:", decoded);
    res.locals.user = decoded;
    return next();

  }

  return next();
};

export default deserializeUser;
