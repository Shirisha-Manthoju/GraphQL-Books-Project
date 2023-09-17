exports.Query = {
    message: () => {
        return "Hello world"
    },

    books: (parent, args, { db }) => db.books,

    book: (parent, { id: bookId }, { db }) => {
        const book = db.books.find((book) => book.id === bookId)
        return book
    },

    categories: (parent, args, { db }) => db.categories,

    category: (parent, { id: categoryId }, { db }) => {
        const category = db.categories.find(item => item.id === categoryId)
        return category
    }
}