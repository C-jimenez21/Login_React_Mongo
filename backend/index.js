import app from './app.js';
import dotenv from 'dotenv';

dotenv.config("")
console.log(process.env.MY_SERVER);
let server = JSON.parse(process.env.MY_SERVER)
app.listen(server, () => {
    console.log(`Server listening on https://${server.hostname}:${server.port}`);
})