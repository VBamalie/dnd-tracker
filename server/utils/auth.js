const jwt = require("jsonwebtoken");

//this sets the token secret and expiration date

const secret ="itsasecreet";
const expiration = "5h";

module.exports = {
    //function to authenticate certain routes
    authMiddleware: function (req, res, next){
        //token is sent by req.query or headers
        let token  = req.query.token || req.headers.authorization;

        //trims the token
        if (req.headers.authorization){
            token = token = token.split(" ").pop().trim();
        }

        if(!token){
            return res.status(400).json({message:"no token found!"});
        }

        //verifies the token and then gets user data
        try{
            const {data} = jwt.verify(token, secret, {maxAge: expriration});
        } catch{
            console.log("invalid token");
            return res.status(400).json({ message: 'invalid token!' });
        }

        next()
    },

    signToken: function({ username, email, _id}){
        const payload = {username, email, _id};
        return jwt.sign({data: payload}, secret, {expiresIn: expiration})
    }
}