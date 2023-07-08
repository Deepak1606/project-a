import express from 'express'
import config from 'dotenv'
import login from './src/authorization/login.js'
import register from './src/authorization/register.js'

const process = config.config()

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/login', login)
app.use('/register', register)
app.listen(process.parsed.PORT, () => {
console.log('Server Up and running at',process.parsed.PORT)
})