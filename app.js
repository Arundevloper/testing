require('dotenv').config();

const express = require('express')
const cors = require('cors')
const path = require('path')
const nodemailer = require('nodemailer')
const {submitContactform} = require('./controller/contactController')
const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/contact",submitContactform)

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'frontend', 'dist')))

// Catch-all: send back index.html for client-side routing
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

const server = app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);    
})

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Port ${PORT} is already in use. Kill the other process or use a different port.`);
    } else {
        console.error(`\n❌ Server error:`, err.message);
    }
    // Keep terminal open so user can see the error
    setTimeout(() => process.exit(1), 60000);
})

process.on('uncaughtException', (err) => {
    console.error(`\n❌ Uncaught Exception:`, err.message);
    setTimeout(() => process.exit(1), 60000);
})