
//import dotenv from "dotenv";
import {MongoClient} from "mongodb"
// dotenv.config("../backend/");
import { loadEnv } from "vite";
const env = loadEnv("development", process.cwd(), "ATLAS")

export async function connection(){
    try {
        console.log(`${env.ATLAS_USER}:${env.ATLAS_PASSWORD}`);
        const URI = `mongodb+srv://${env.ATLAS_USER}:${env.ATLAS_PASSWORD}@cluster0.qbqr4gp.mongodb.net/${env.ATLAS_DB}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(URI);
        return client.db()
    } catch (error) {
        return{status: 500, message: error};
    }
}
