import express from 'express';
import { adminLogin, deleteCommentById } from '../controllers/adminController.js';
import { getAllBlogsAdmin } from '../controllers/adminController.js';
import { getAllComments } from '../controllers/adminController.js';
import { approveCommentById } from '../controllers/adminController.js';
import { getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';
const adminRouter = express.Router();
adminRouter.post('/login', adminLogin) ;
adminRouter.get('/comments', getAllComments); 
adminRouter.get('/blogs',auth , getAllBlogsAdmin);
adminRouter.post('/delete-comment',auth , deleteCommentById); 
adminRouter.post('/approve-comment',auth , approveCommentById); 
adminRouter.get('/dashboard',auth , getDashboard); 


export default adminRouter;