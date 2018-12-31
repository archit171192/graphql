import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const app = express();

const PORT = 4000;

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// const typeDefs = `type Author {
//     age: Int
//     name: String
//     Books: [ String ]
// }

// type Query {
//     author: [ Author ]
// }

// `;

// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!!'
//   },
// };

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


app.listen({ port: PORT }, () =>
  console.log(` Server ready at http://localhost:4000${server.graphqlPath}`)
)