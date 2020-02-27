const express = require ('express');
const bodyParser= require(`body-parser`);
const config=require('../config.js');
// const user =require(`../components/user/network`);
const user =require('./components/user/network');
const auth =require('./components/auth/network');
const listasEmpaque =require('./components/listasEmpaque/network');
const errors = require (`../network/errors`);

const app= express();
app.use(bodyParser.json());
//router

app.use('/api/user',user);
app.use('/api/auth',auth);
app.use('/api/listasEmpaque',listasEmpaque);
app.use(errors);
app.listen( config.api.port,()=>{
    console.log('Api escuchando en el puerto',config.api.port);
})

// app.listen(3000)