import express from "express";
import { sayHello } from "../controllers/welcomeController";

const router = express.Router();

router.get("/api/v1/", sayHello);

export default router;
