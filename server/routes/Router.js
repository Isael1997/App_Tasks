import {pool} from '../database.js'
import {Router} from 'express'

const router = Router();

router.get('/ping', async(req, res) =>{
    const [rows] = await pool.query('SELECT 1 + 1 as result');
    console.log(rows);
    res.json("Result");
})

export default router;