import jwt from "jsonwebtoken";
import { findByCNIC } from "../servicess/students.services.js";
import serverConfig from "../configs/serverconfig.config.js";

const loginStudent = async (req, res) => {
    try {
        const { roll, password } = req.body;

        // Assume findByCNIC is an async function
        const findByCnic = await findByCNIC(roll);

        if (!findByCnic) {
            return res.status(400).json({ status: 400, message: "Invalid Credential" });
        }
        const token = jwt.sign({ email: findByCnic.email, username: findByCnic.name }, serverConfig.secretKey, { expiresIn: '1y' })
        return res.status(200).json({ status: 200, message: "success", data: findByCnic, token: token });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "internal error", errormessage: error.message });
    }
}

export {
    loginStudent
}