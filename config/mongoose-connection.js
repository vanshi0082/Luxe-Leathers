const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/bag") //few times it will not workf
.then(function () {
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})
//run the comand to check

module.exports = mongoose.connection;

//its called sapration of concern