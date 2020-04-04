'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.listen(PORT, () => {
    console.log('plalap', PORT);
});

server.get('/test', (Request, Response) => {
    Response.send('Ammar al hariry server..');
})

server.get('/data', (Request, Response) => {
    let ammar = [{
        name: 'Ammar',
        age: 26,
        job: 'mangaka'
    }];
    Response.json(ammar);
});