import express from 'express';
const router = express.Router();

import { dashboard , logIn } from '../controllers/main.js';

router.route("/dashboard").get(dashboard)
router.route("/login").post(logIn)


export default router;