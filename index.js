const express = require('express')
const mongoose = require('mongoose')
const registrationController = require('./controllers/registrationController')
const alluserController = require('./controllers/alluserController')
const deleteuserController = require('./controllers/deleteuserController')
const edituserController = require('./controllers/edituserController')
const loginController = require('./controllers/loginController')
const addressModel = require('./models/addressModel')
const addressController = require('./controllers/addressController')
const getaddressController = require('./controllers/getaddressController')
const forgotPasswordController = require('./controllers/forgotPasswordController')
const resetPasswordController = require('./controllers/resetPasswordController')
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

app.post('/edituser/:id', edituserController)

app.post('/login', loginController)

app.post('/user/address', addressController)

app.get('/address', getaddressController)

app.post('/forgotPassword', forgotPasswordController)

app.post('/resetPassword', resetPasswordController)

//port
app.listen(5000, ()=>{
    console.log('Server is runing');
    
})