import { Request, Response, NextFunction } from 'express'
import { get } from 'lodash';
import { verifyJwt } from '../utils/jwt.utils';
import { ReIssueAccessToken } from '../services/session.service';

const deserializeUser = async (req:Request, res:Response, next:NextFunction) => {
  const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");
  const refreshToken = get(req, "headers.x-refresh",'').toLocaleString(); //Todo make sure it's string

    
  if (!accessToken) {
    // console.log("No access token provided");
    return next();
  }
  const { decoded, expired } = verifyJwt(accessToken);

  if (decoded) {

    res.locals.user = decoded;
    return next();

  }
  if (expired && refreshToken) {
    const newAccessToken = await ReIssueAccessToken({ refreshToken });
      console.log(newAccessToken)
    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
    }

    const result = verifyJwt(newAccessToken as string);

    res.locals.user = result.decoded;
    return next();
  }

  return next();
};

export default deserializeUser;
