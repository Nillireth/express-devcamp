const sequelize = require('./seq')
const colors = require('colors')
const {DataTypes} = require('sequelize')

//Crear instancia del modelo User

const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes)

//Definir la función de conexión a la base de datos

const connectDB = async () => {
    try{
        //Conectarse a la base de datos
        await sequelize.authenticate()
        console.log('Conectado a mysql'.bgMagenta.black)
        // Create a new user
        const samuel = await User.create(
            {
                username: "Samuel", 
                email: "samuel@gmail.com", 
                password: "1234"
            });
        console.log("Samuel auto-generated ID:", samuel.id);

    } catch(error){
        console.log(error)
    }
}

connectDB()
