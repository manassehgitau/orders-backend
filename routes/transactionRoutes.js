import express from 'express'
import { getTokenRequest, STKPush } from '../controllers/transanctionController.js';


const transactionRouter = express.Router();

transactionRouter.post('/token', getTokenRequest);
transactionRouter.post('/pay', STKPush);

export default transactionRouter;