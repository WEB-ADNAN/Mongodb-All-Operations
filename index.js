const express = require('express')
const mongoose = require('mongoose')
const registrationController = require('./controllers/registrationController')
const alluserController = require('./controllers/alluserController')
const deleteuserController = require('./controllers/deleteuserController')
const app = express()

//middlewares
app.use(express.json())

//database connection
mongoose.connect('mongodb+srv://Test:hXA9HgC6XeemQ1aL@cluster0.8nf1qxl.mongodb.net/Operation?appName=Cluster0').then(()=>{
    console.log('Database Connected');  
})

//Routs

app.post('/registration', registrationController)
app.get('/alluser', alluserController)
app.delete('/delete/:id', deleteuserController)

//port
app.listen(5000, ()=>{
    console.log('Server is runing');
    
})