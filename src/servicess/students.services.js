import db from "../module/index.js";

const {student:Students}=db;

const findByCNIC = async(roll)=>{
    try {
        const response = await Students.find({rollno:roll}).exec();
        return response
    } catch (error) {
        throw error;
    }
}

const getStudent =async(id)=>{
    try {
        const response = await Students.find({_id:id}).exec();
        console.log(response);
        return response
    } catch (error) {
        throw error
    }
}

export {
    findByCNIC,
    getStudent
}
