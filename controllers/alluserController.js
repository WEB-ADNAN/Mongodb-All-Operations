const Registration = require('../models/registrationModel')

const alluserController = async (req,res)=>{
    let alluser = await Registration.find({})

    res.send(alluser)
}

module.exports = alluserController