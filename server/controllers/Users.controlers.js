import { pool } from '../database.js'

export const SignIn = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM users"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const SignUp = async (req, res) => {
    try {
        const { name, lastname, email, username, password } = req.body;
        const [result] = await pool.query(
            "INSERT INTO users(name, lastname, email, username, password) VALUES (?, ?, ?, ?, ?)",
            [name, lastname, email, username, password]
        );
        res.json({
            id: result.insertId,
            name,
            lastname,
            email,
            username,
            password
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}