const jwtToken = require("jsonwebtoken");

function middleware1 (req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({errMessage: "User Unauthorised"});
        
        const validatedUser = jwtToken.verify(token, process.env.JWT_TOKEN);
        req.user = validatedUser.id;
        next();



} catch (error){
    return res.status(401).json({errMessage: "Unauthorized User"})
    }
};

module.exports = middleware1;

