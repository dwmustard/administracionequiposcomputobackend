const jwt = require('jsonwebtoken')
const config = require('../config/jwt.config');

const auth = (roles) => (req, res, next) => {

    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ errors: [{ msg: 'No token, authorization denied' }] });
    }
    const token = authHeader;

    try {
        const user = jwt.verify(token, config.jwtSecret);
        const role = user.role;
        if (roles && !roles.includes(role)) {
            return res.status(401).json({
                errors: [{ msg: "Insufficient role privileges (only: ${roles})" }] 
            })
        }
        next();
    } catch (err) {

        return res.status(401).json({ errors: [{ msg: 'Invalid token, authorization denied' }] })
    }
}

module.exports = auth;
