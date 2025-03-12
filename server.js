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

//client.connect()

// Database queries \\
async function select_all_clients() {
    try {
        const res = await client.query('SELECT * FROM clients')
        console.log("CLIENTS: ")
        console.log(res.rows)
        return res.rows
    } catch (err) {
        console.log(err.message)
        throw err
    }
}

async function select_all_users() {
    try {
        const res = await client.query('SELECT * FROM users')
        console.log("USERS: ")
        console.log(res.rows)
        return res.rows
    } catch (err) {
        console.log(err.message)
        throw err
    } 
}

const closeConnection = async() => {
    try {
        await client.connect()
        await select_all_users()
        await select_all_clients()
    } catch (err) {
        console.log(err.message)
    } finally {
        await client.end()
        console.log("Connection closed successfully")
    }
}

closeConnection()

app.listen(PORT, () => console.log("server running on PORT " + PORT))

