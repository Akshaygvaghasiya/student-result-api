var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    rollno:{
        type:String
    },
    name:{
        type:String
    },
    s1:{
        type:String
    },
    s2:{
        type:String
    },
    s3:{
        type:String
    },
    s4:{
        type:String
    },
    s5:{
        type:String
    },
    total:{
        type:String
    }
})

var usermodel = mongoose.model("result",userschema);

module.exports = usermodel;