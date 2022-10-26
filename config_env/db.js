const mongoose = require('mongoose')

//const uri = 'mongodb+srv://Nillireth:1031803155p@cluster0.fkt5zlr.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/bootcamps-sena'
//Componente de conexión a BD
// Tipo : Funcional

const connectDB = async() => {
   const conn = await mongoose.connect(uri, {
    useNewUrlParser : true, 
    useUnifiedTopology : true 
   })

   console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectDB()
