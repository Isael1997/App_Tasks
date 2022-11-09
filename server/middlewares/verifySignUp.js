import {pool} from '../database.js'

export const checkDuplicateEmailorUsername = async (req, res, next) =>{
    try {
        const [result] = await pool.query(
            "SELECT * FROM users where username = ? or email = ?", [req.body.username, req.body.email]
        );

        if (result.length !== 0)
            return res.status(404).json({ message: "This user already exists" });        

        next()
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}