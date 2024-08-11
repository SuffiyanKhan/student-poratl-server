import express from "express";
import { loginStudent, getStudentData } from "../controllers/students.controllers.js";
import checkAuth from "../middleware/auth.middleware.js";

const router = express.Router();




router.post('/loginStudent', loginStudent)
router.get('/getStudentData', checkAuth, getStudentData)






export default router;