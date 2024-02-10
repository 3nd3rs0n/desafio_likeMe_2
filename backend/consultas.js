const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes');


app.use(cors());
app.use(express.json());


app.use ((error, req, res, next) => {
    res.status(500).send('error de servidor')
})

const PORT = process.env.PORT|| 3000;



app.use('/', routes);




app.listen(PORT, () => console.log(`SERVIDOR CORRIENDO EN PUERTO ${PORT}`));


