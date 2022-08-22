require('dotenv').config();
const jwt = require('jsonwebtoken');

function authorizeToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, 'secretkey', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        // res.json(user);
        next();
    } );
}

module.exports = authorizeToken;