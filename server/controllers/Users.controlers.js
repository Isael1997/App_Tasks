import { pool } from '../database.js';
import {encryptPassword} from './user.password.controller.js'

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
        const { name, lastname, email, username, password, roles } = req.body;

        //encrypting password
        const epassword = await encryptPassword(password)
        console.log(epassword); 

        const [result] = await pool.query(
            "INSERT INTO users(name, lastname, email, username, password) VALUES (?, ?, ?, ?, ?)",
            [name, lastname, email, username, epassword]
        );

        //The names of the categories of the permissions of the routes
        const rol = ["user", "moderate", "admin"];

        //loop through the *rol* list to filter the roles entered
        rol.map(async (rol) => {
            const equal = (roles.filter((filterrol) => filterrol === rol)).toString()
            //if the names of the roles match
            equal ?
                await pool.query(
                    "INSERT INTO roles(name, users_id) VALUES (?, ?)",
                    [equal, result.insertId]
                )
                
                : null
        })

        res.json({
            id: result.insertId,
            name,
            lastname,
            email,
            username,
            password: result.password,
            roles
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}