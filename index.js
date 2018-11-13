import { GraphQLServer } from 'graphql-yoga'; 
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
    // schema : 사용자에게 보내거나, 사용자에게 받을 data에 대한설명.. 
    typeDefs: "graphql/schema.graphql",
    resolvers

})

server.start(() => console.log("graphql server running"))