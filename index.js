const express = require('express');
const app = express();
const port = 3005;

app.get('/', (response,request)=> response.send ('Hello world again !!'));

app.listen(port, ()=> console.log('Application started !!'));