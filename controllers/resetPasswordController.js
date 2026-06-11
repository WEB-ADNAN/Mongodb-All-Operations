const Registration = require('../models/registrationModel')
const bcrypt = require('bcrypt')

const resetPasswordController = async (req,res)=>{
    const {email, password} = req.body

    let userdata = await Registration.findOne({email: email})

    if(!userdata){
        return res.send("user not found")
    }else{
        let hash = bcrypt.hashSync(password, 10)
        userdata.password = hash

        userdata.save()
        return res.send("password reset successful")
    }

}

module.exports = resetPasswordController