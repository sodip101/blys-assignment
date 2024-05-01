import { Request, Response, Router } from "express";
import { Controller } from "./controller";

const router = Router();

router.get("/", Controller.testLive);
router.post("/verifyCode", Controller.verifyCode);

export default router;
