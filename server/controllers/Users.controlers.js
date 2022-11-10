import { pool } from '../database.js';
import { encryptPassword, comparePassword } from './user.password.controller.js'

export const SignIn = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const [userFound] = await pool.query(
            "SELECT * FROM users where username = ? or email = ?",
            [username, email]
        );
        if(userFound.length === 0 ){
            return res.status(400).json({ message: "User not Found" }); 
        }else{
            console.log(userFound[0].password)
            const matchpassword = await comparePassword(password, userFound[0].password);

            if(!matchpassword){
                return res.status(401).json({
                    message: "Invalid Password"
                });
            }else{
                res.json(userFound);
            }
        }
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