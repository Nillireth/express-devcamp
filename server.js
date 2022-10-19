//1. Crear el objeto express
const express = require('express')

//2. Citar las dependencias necesarias para el proyecto 
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoint = require('express-list-endpoints')

//Los componentes de rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const courseRoutes = require('./routes/CourseRoutes')


//3. Establecer archivo de configuración
dotenv.config({
    path:'./config/config.env'
})
console.log(process.env.PORT)

//Crear el objeto aplicación para el servidor de desarrollo 
const app = express()

//rutas de proyecto
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', courseRoutes)

//endpoint de aplicación
app.get('/', (request, response) => {
    response.
        status(200)
            .json({
                "success":true,
                "data":"request exitosa"
            })
    
})

//Endpoints de dominio 
//Bootcamp


//Imprimir la lista de endpoints validas del proyecto
console.log(listEndpoint(app))

//Ejecutar el servidor de desarrollo
//Parametros: 
//    puerto de escucha - listen

app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en puerto 5000`.bgMagenta)
})
