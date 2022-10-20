const mongoose = require('mongoose')

//Modelo de bootcamps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Por favor, ingresa nombre"],
        unique: true, 
        maxlength: [30, "No se admiten bootcamps mayores a 30"]
    },
    description:{
        type: String,
        required: [true, "Por favor, ingrese descripción"],
        maxlength: [500, "No se admiten descripciones mayores a 500"]
    },
    phone: {
        type: String,
        maxlength:[20, "Telefonos no mayores a 20"]
    },
    email:{
        type: String,
        match:[
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Por favor, ingrese email valido"
    ]
    },
    average_rating: {
        type: Number,
        min: [1, "Calificación minima: 1"],
        max:[10, "Calificación maxima: 10"]
    },
    average_const: Number
})

module.exports = mongoose.model('bootcamp' , BootcampsSchema)