import { verifyAccessToken } from "../middleware/auth.middleware.js";
import {user} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.get("/user", verifyAccessToken, user);

export default router;