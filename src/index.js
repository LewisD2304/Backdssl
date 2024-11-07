const express = require('express');
require('dotenv').config();
const userController = require('./controllers/userControllers')
const rolController = require('./controllers/rolControllers')


const app = express();
app.use(express.json());
app.use('/api/users', userController);
app.use('/api/roles', rolController);

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('hola mundo!');

});

app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
