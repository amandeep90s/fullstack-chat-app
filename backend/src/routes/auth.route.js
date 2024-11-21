import express from 'express';
import { checkAuth, signin, signout, signup, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/signup', signup);

router.get('/signin', signin);

router.get('/signout', signout);

router.get('/update-profile', protectRoute, updateProfile);

router.get('/check', protectRoute, checkAuth);

export default router;
