import jwt from 'jsonwebtoken'
import config from '../config.js'
import { pool } from '../database.js';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            return res.status(403).json({ message: "No Token previded" });
        }
        const decoded = jwt.verify(token, config.secret);
        console.log(decoded.id)

        const [userFound] = await pool.query(
            "SELECT * FROM users where id = ?",
            [decoded.id]
        );
        if (userFound.length === 0) {
            return res.status(403).json({ message: "User no found" });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "Unauthorized" });
    }
}