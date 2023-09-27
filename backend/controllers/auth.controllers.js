import bcrypt from 'bcrypt'
import { connection } from '../config/atlas.js'
import { ObjectId } from 'mongodb';
import { generateToken } from '../middlewares/Token.js';

export const register = async (req, res) => {
    try {
        const { username, email, password, rol } = req.body;
        let db = await connection()
        let colecction = await db.collection('users')
        let userExists = await colecction.findOne({ "email": email })
        console.log(userExists);
        if(userExists) {return res.status(404).json({error: ["This email is already register"]});}
        const passwordHash = await bcrypt.hash(password, 10)
        console.log(passwordHash);
        const newUser = {
            _id: new ObjectId(),
            username,
            email,
            password: passwordHash,
            rol: 1
        }
        console.log({ "user obj": newUser });
        const userSaved = await colecction.insertOne(newUser);
        const token = await generateToken({ id: newUser._id })
        res.cookie('token', token);
        const user = await colecction.findOne({ _id: newUser._id });
        (userSaved.acknowledged) ? res.status(201).send({ message: 'User created successfully', user }) : res.status(404).send({ message: ' an error occurred with user creation' })
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const login = async (req, res) => {

    const { email, password } = req.body;
    try {
        let db = await connection()
        let colecction = await db.collection('users')

        const userFound = await colecction.findOne({ email: email })
        if (!userFound) { return res.status(400).send({ message: 'User not found' }) }

        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) { return res.status(400).send({ message: 'Incorrect password' }) }

        const token = await generateToken({ id: userFound._id })
        res.cookie('token', token);
        //res.set('Authorization', `${token}`)
        res.send(userFound)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const logout = async (req, res) => {
    res.cookie('token', "", { expires: new Date(0) });
    return res.send({ status: 200, message: 'Session was closed' });
}

export const profile = async (req, res) => {
    let db = await connection()
    let colecction = await db.collection('users')
    const userFound = await colecction.findOne({ _id: new ObjectId(req.user.id) })
    if (!userFound) { return res.status(400).send({ message: 'User not found' }) }
    res.send({ status: 200, message: "hola  desde profile", data: userFound })
    //res.set('Authorization', `Bearer ${token}`)
}

