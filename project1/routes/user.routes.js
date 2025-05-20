import { Router } from 'express';
import { getAllUser, getUser } from '../controllers/user.controller.js';
import authorise from "../middlewares/auth.middleware.js";
const userRouter  = Router();

userRouter.get('/', getAllUser);

userRouter.get('/:id',authorise, getUser);

userRouter.post('/',(req, res)=> res.send({title:"Create user"}));  

userRouter.put('/:id', (req, res) => res.send({title:"Update user by id"}));

userRouter.delete('/:id', (req, res) => res.send({title:"Delete user by id"}));





export default userRouter;