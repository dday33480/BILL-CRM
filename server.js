const express = require('express')
const cors = require('cors')
const axios = require('axios')
const {Client} = require('pg')

require('dotenv').config()
const app = express()

// Database connection variables \\
const HOST = process.env.HOST
const PORT = process.env.PORT
const DB_USER = process.env.USER
const DB_PASSWORD = process.env.PASSWORD
const DB = process.env.DATABASE

// Database connection \\
const client = new Client({
    host: HOST,
    user: DB_USER,
    port: PORT,
    password: DB_PASSWORD,
    database: DB
})

client.connect()

// Database queries \\
client.query('SELECT * FROM clients', (err, res) => {
    if (!err) {
        console.log("CLIENTS: ")
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
    //client.end()
})

client.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS user_permissions VARCHAR(35)', (err, res) => {
    if (!err) {
        console.log("ALTERED TABLE users")
    } else {
        console.log(err.message)
    }
})

client.query("UPDATE users SET user_permissions='admin' WHERE user_id = 1", (err, res) => {
    if (!err) {
        console.log("UPDATED column value")
    } else {
        console.log(err.message)
    }
})

client.query('SELECT * FROM users', (err, res) => {
    if (!err) {
        console.log("USERS: ")
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
    client.end()
})

app.listen(PORT, () => console.log("server running on PORT " + PORT))

