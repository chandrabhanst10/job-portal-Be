import express from 'express'
import { isAuthenticated, isAuthorised } from '../Middlewares/Auth.js';
import { PaytmPayment } from '../Controllers/Payment.js';
const paymentRouter = express.Router();

paymentRouter.post("/post-paytm-subscription",isAuthenticated,isAuthorised("Job Seeker"),PaytmPayment)

export default paymentRouter;