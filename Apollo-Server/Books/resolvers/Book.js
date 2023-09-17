exports.Book = {
    category: ({ categoryId }, args, { db }) => {
        return db.categories.find((item) => item.id === categoryId)
    },
}