import express from "express";

const register = express.Router()

register.get('/v1', (req, res) => {
    res.send("register Get Api")
})

export default register