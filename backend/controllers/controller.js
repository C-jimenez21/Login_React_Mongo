//Controllers
import { connnection } from "../config/atlas.js";

let colecction = await (await connnection()).collection('users')

const getUsers = async (req, res) => {
    try {
        let result  = await colecction.find().toArray()
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

export {
    getUsers
}