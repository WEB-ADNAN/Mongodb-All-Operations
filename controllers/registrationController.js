const Registration = require('../models/registrationModel')

const registrationController = (req,res)=>{
    const {username,email,password} = req.body
    
    let user = new Registration({
        username: username,
        email: email,
        password: password
    })

    user.save()
    res.send(user)
    
}

module.exports = registrationController