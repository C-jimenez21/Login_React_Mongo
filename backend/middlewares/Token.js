import { SignJWT, jwtVerify } from "jose";


const generateToken = async (payload) => {
    console.log({ "datauser": payload });
    //crecion del token
    const encoder = new TextEncoder();
    const jwtConstructor = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));
    return jwtConstructor
}

const validateToken = async (req, res, next) => {
    try {
        const { token } = req.cookies
        if(!token){return res.status(401).send({message: "Not token, authorization denied"})}
        //console.log(token);
        //let tokenRight = authorization.split(' ')[1];
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
            );
        req.user = jwtData.payload;
        next();
    } catch (error) {
        console.log(error);
        return false;
    }
}


export {
    generateToken,
    validateToken
}