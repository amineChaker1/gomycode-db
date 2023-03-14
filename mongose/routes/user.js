import express from "express";
import { getAllUsers, loginUser, signupUser } from "../controllers/user.js";
const router = express.Router();

router.get("/", getAllUsers);

//login route
router.post("/login", loginUser);

// signup route

router.post("/signup", signupUser);

export default router;
