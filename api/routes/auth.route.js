import express from 'express';
import { SignIn, SignUp } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/sign-in", SignIn);
router.post("/sign-up", SignUp);
router.post("/google")

export default router;