import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import favicon from 'serve-favicon';
import path from "path";
import { fileURLToPath } from 'url';
import serverConfig from "./src/configs/serverconfig.config.js";
import { DB_RETRY_LIMIT, DB_RETRY_TIMEOUT } from "./src/constant/constant.js";
import router from "./src/routes/index.js";



let connnectionRetries = 0
const connectionDB = async () => {
    try {
        console.log("Establishing DB connection....")
        await mongoose.connect(serverConfig.dbURL);
        console.log('Db connected')

    } catch (error) {
        if (connnectionRetries < DB_RETRY_LIMIT) {
            connnectionRetries++
            console.log(`Reconnecting to DB ${connnectionRetries}/${DB_RETRY_LIMIT}`)
            await new Promise(resolve => setTimeout(resolve, DB_RETRY_TIMEOUT))
            await connectionDB()
        } else {
            process.exit()
        }
    }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 5000;
const app = express();
const faviconPath = path.join(__dirname, 'public', 'favicon.ico');


connectionDB()
    .then(res => console.log("Connected"))
    .catch(err => console.log("DB NOT Connected"))


app.use(express.json())
app.use(cors())
app.use(favicon(faviconPath));

app.use("/", router)

app.listen(PORT, () => {
    console.log(`server sre runing on port http://localhost:${PORT}`)
})

export default app
