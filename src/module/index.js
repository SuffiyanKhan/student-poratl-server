import mongoose from "mongoose";
import studentModule from "./students.module.js";

const db = {}


db.mongoose = mongoose,
db.student = studentModule



export default db 