import express from "express";
import { createUser, getUserById } from "../controllers/User";

const router = express.Router();

router.get("/:id", getUserById);
router.post("/", createUser);
//router.post("/test", passowrdMatches);

export default router;
