const { v4: uuid } = require("uuid")
exports.Mutation = {
    addBook: (parent, { input }, { db }) => {
        const {
            title,
            image,
            price,
            onSale,
            categoryId
        } = input

        const newBook = {
            id: uuid(),
            title,
            image,
            price,
            onSale,
            categoryId
        }

        db.books.push(newBook)

        return newBook
    }
}