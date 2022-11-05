import express from 'express'
import { createPool } from 'mysql2/promise'


export const pool = createPool({
    host: 'localhost',
    port: '7777',
    user: 'root',
    password: 'ronnypassword',
    database: 'DBTasks'
})
