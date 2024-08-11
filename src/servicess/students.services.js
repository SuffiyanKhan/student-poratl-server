import db from "../module/index.js";

const {student:Students}=db;

const findByCNIC = async(roll)=>{
    try {
        const response = await Students.find({rollno:roll}).exec();
        // console.log(response);
        return response
    } catch (error) {
        throw error;
    }
}

export {
    findByCNIC
}
