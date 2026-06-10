const Registration = require('../models/registrationModel')

const edituserController = async (req,res)=>{
    const {id} = req.params

    let data = await Registration.findByIdAndUpdate(id,req.body, {new:true})

    res.send(data)
}

module.exports = edituserController