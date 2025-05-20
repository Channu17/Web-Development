import { Router } from 'express';
import authorise from '../middlewares/auth.middleware.js';
import { createSubscription, getuserSubscriptions } from '../controllers/subscription.controller.js';


const subscriptionRouter = Router();


subscriptionRouter.get('/', (req, res)=> res.send({title:"Get all subscriptions"}));

subscriptionRouter.get('/:id', (req, res)=> res.send({title:"Get subscription by id"}));    

subscriptionRouter.post('/', authorise, createSubscription);

subscriptionRouter.put('/:id', (req, res)=> res.send({title:"update subscription by id"}));

subscriptionRouter.delete('/', (req, res)=> res.send({title:"Delete subscription by id"}));

subscriptionRouter.get('/user/:id', authorise, getuserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res)=> res.send({title:"Cancel subscription by id"}));

subscriptionRouter.get('/upcoming-renewals', (req, res)=> res.send({title:"Get all upcoming renewals"})); 

export default subscriptionRouter;