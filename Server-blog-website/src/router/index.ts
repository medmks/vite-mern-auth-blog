import express  from 'express';
import Register from './Sign-in';
import Testontroller from './Testontroller';

const router = express.Router()

export default () : express.Router => {
          Register(router);
          Testontroller(router)
          return router
}