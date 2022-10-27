const sequelize = require('./seq')
const colors = require('colors')

//Crear instancia del modelo User

const UserModel = require('../models/user')


//Definir la función de conexión a la base de datos

const connectDB = async () => {
    try{
        //Conectarse a la base de datos
        await sequelize.authenticate()
        console.log('Conectado a mysql'.bgWhite.black)

    } catch(error){
        console.log(error)
    }
}

module.exports = connectDB
