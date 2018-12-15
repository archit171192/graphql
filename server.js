import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
const server = express();

server.get('/', (req, res) => {
    res.send('<html> <head> </head> <body> <h1> Hello Archit</h1></body></html>');
} );

server.listen(4000, () => {
    console.log('listening on port 4000');
});