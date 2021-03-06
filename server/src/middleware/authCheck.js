const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    const token = req.headers.authorization.split(' ')[1];

    return jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {

        if (err) { 
            return res.status(401).end(); 
        }

        req.userData = {
            tokenID: token,
            userid: decoded._id,
            username: decoded.username,
        };

        return next();
    });
};
