const { gql } = require("apollo-server")

exports.typeDefs = gql`
    type Query {
        message: String!
        books: [Book!]!
        book(id: ID!): Book
        categories: [Category!]! 
        category(id: ID!): Category 
    }

    type Book {
        id: ID!
        title: String!
        image: String
        price: String!
        onSale: Boolean!
        category: Category
    }

    type Category {
        id: ID!
        name: String!
        books: [Book!]!
    }

`
