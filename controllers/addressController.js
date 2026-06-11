const addressModel = require('../models/addressModel')

const addressController = (req,res)=>{
    const {city,street,state,userId} = req.body

    let address = new addressModel({
        city: city,
        street: street,
        state: state,
        userId: userId
    })

    address.save()
    
    res.send('address created')
}

module.exports = addressController