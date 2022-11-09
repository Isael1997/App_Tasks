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

export const Test = async (req, res) => {
    console.log('p')
    const { roles } = req.body;
    const rol = ["user", "moderate", "admin"];
    rol.map((rol) => { console.log(roles.filter((r) => r === rol)) })

}

export const SignUp = async (req, res) => {
    try {
        const { name, lastname, email, username, password, roles } = req.body;

        const [result] = await pool.query(
            "INSERT INTO users(name, lastname, email, username, password) VALUES (?, ?, ?, ?, ?)",
            [name, lastname, email, username, password]
        );

        console.log('users');

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

        console.log('roles')

        res.json({
            id: result.insertId,
            name,
            lastname,
            email,
            username,
            password,
            roles
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}