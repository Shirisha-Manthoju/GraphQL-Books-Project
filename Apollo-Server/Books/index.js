const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query")
const { db } = require("./db")
const { Book } = require("./resolvers/Book")
const { Category } = require("./resolvers/Category")


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Book,
        Category
    },
    context: {
        db
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
})
