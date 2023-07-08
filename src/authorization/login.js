import express from "express";

const login = express.Router()

login.get('/v1', (req, res) => {
    res.send("Login Get Api")
})

export default login