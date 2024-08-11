import dotenv from "dotenv";
dotenv.config();

const serverConfig={
    dbURL:process.env.SERVER_APP_DB_URI,
    secretKey :process.env.SERVER_SECRET_KEY
}

export default serverConfig;