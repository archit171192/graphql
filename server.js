import express from 'express';
const server = express();

server.get('/', (req, res) => {
    res.send('<html> <head> </head> <body> <h1> Hello World</h1></body></html>');
} );

server.listen(4000, () => {
    console.log('listening on port 4000');
});