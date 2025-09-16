import express from 'express';
const router = express.Router();

import { dashboard , logIn } from '../controllers/main.js';
import authtoken from '../middleware/auth.js'
router.route("/dashboard").get(authtoken,dashboard)
router.route("/login").post(logIn)


export default router;
