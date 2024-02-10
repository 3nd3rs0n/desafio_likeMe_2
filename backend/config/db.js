const {Pool} = require('pg')
require('dotenv').config();
const {HOST,USER,PASSWORD,DATABASE} = process.env

const pool = new Pool ({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    allowExitOnIdle: true
})

pool.connect((error, client,done) => {
    if (error) {
        console.log("se produjo un error al conectarse a la base de datos", error)
    } else {
        console.log("se conecto correctamente a la base de datos")
    }
    
})



module.exports = pool