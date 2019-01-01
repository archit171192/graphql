import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import mongoose from 'mongoose';

const PORT = 4000;

mongoose.connect('mongodb://localhost/graphqlTutorial', { useNewUrlParser: true });

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });


app.listen({ port: PORT }, () =>
  console.log(` Server ready at http://localhost:4000${server.graphqlPath}`)
)