const Registration = require('../models/registrationModel')
const bcrypt = require('bcrypt')

const loginController = async (req,res)=>{
    const {email, password} = req.body

    let user = await Registration.findOne({email: email})

    if(!user){
        return res.send("user not found")
    }

    let passwordcheck = bcrypt.compareSync(password, user.password)

    if(!passwordcheck){
        return res.send('password is incorrect')
    }else{
        return res.send('login successfull')
    }
}

module.exports = loginController