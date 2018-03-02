const express = require('express'),
    http = require('http'),
    Path = require('path');

let app = new express(),
    server = http.Server(app),
    _root = __dirname;

//default static folder
app.use('/', express.static(`${Path.dirname(_root)}\/dist\/`));

// default route

app.get('/*',(req, res)=>{
    res.sendFile(`${Path.dirname(_root)}\/dist\/index.html`);
});

//listen
app.listen(3000, (err) =>{
    console.log(err||'Server Started on localhost:3000');
});