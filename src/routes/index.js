import express from "express";
import { loginStudent } from "../controllers/students.controllers.js";

const router = express.Router();




router.post('/loginStudent',loginStudent)






export default router;