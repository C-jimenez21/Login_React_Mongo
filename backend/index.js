import app from './app.js';
import {loadEnv} from 'vite';

const env = loadEnv("development", process.cwd(), "VITE")


let config = {
    port: env.VITE_PORT_BACKEND,
    hostname: env.VITE_HOSTNAME
}
app.listen(config, () => {
    console.log(`Server listening on https://${config.hostname}:${config.port}`);
})