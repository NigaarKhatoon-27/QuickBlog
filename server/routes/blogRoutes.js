import express from 'express';
import { addBlog } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
import { getAllBlogs } from '../controllers/blogController.js';
import { getBlogById } from '../controllers/blogController.js';
import { deleteBlogById } from '../controllers/blogController.js';
import { togglePublish } from '../controllers/blogController.js';
import { addComment } from '../controllers/blogController.js';
import { getBlogComments } from '../controllers/blogController.js';
import { generateContent } from '../controllers/blogController.js';

const blogRouter = express.Router();
blogRouter.post("/add" ,upload.single("image"),auth ,addBlog)
blogRouter.get('/all' , getAllBlogs);
blogRouter.get('/:blogId' , getBlogById);
blogRouter.post('/delete' , auth ,deleteBlogById);
blogRouter.post('/toggle-publish' , auth ,togglePublish);
blogRouter.post('/add-comment' , addComment);
blogRouter.post('/comments' , getBlogComments);

blogRouter.post('/generate' , auth , generateContent);


export default blogRouter;