const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')
const conectarDB = require('./config/db')
conectarDB();
// servidor 
const server = new ApolloServer({
    typeDefs,
    resolvers
});
// server.listen().then(({url}) => {
//     console.log(`servidor listo en la URL ${url}`)
// })
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});