const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    patientID: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    disease: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Patient', patientSchema);
