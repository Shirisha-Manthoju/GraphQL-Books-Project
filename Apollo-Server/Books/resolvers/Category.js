exports.Category = {
    books: ({ id: categoryId }, args, { db }) => {
        const categories = db.books.filter((category) => category.categoryId === categoryId)
        return categories
    }
}