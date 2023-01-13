const mongoose = require('mongoose')
const schema = mongoose.Schema

const user = new schema({
    name :{
        type:String 
    },
    phone :{
        type:String
    },
    passsword:{
        type: String
    }
},{timestamp:true})

const User = mongoose.model('user',user)

module.exports = User