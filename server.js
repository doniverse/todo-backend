const express = require("express")
const dotenv = require('dotenv').config()
const http = require('http')
const cors = require('cors')
const connectDB = require('./config/db')
connectDB();

const PORT = process.env.PORT

const app = express()

app.use(cors({
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use("/api/todos", require("./routes/todoRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
const server = http.createServer(app)
server.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}/`)
});