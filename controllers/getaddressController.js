const addressModel = require('../models/addressModel')

const getaddressController = async (req,res)=>{

    let data = await addressModel.find({}).populate("userId")

    res.send(data)

}

module.exports = getaddressController