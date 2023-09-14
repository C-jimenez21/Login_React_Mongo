import app from './app.js';
import dotenv from 'dotenv';

dotenv.config("")
let server = JSON.parse(process.env.MY_SERVER)
app.listen(server, () => {
    console.log(`Server listening on https://${server.hostname}:${server.port}`);
})