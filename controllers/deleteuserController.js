const Registration = require('../models/registrationModel')

const deleteuserController = async (req,res)=>{
    const {id} = req.params

    await Registration.findByIdAndDelete(id)
    res.send("user deleted")
}

module.exports = deleteuserController