const { gql } = require("apollo-server")

exports.typeDefs = gql`
    type Query {
        message: String!
        books: [Book!]!
        book(id: ID!): Book
        categories: [Category!]! 
        category(id: ID!): Category 
    }

    type Mutation {
        addBook(input: AddBookInput!) : Book!
    }

    type Book {
        id: ID!
        title: String!
        image: String
        price: Float!
        onSale: Boolean!
        category: Category
    }

    type Category {
        id: ID!
        name: String!
        books: [Book!]!
    }

    input AddBookInput {
        title: String!
        image: String
        price: String!
        onSale: Boolean!
        categoryId: String
    }

`
