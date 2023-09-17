const books = [
    {
        id: "1",
        title: "The Sword Of Destiny",
        price: 950.99,
        onSale: true,
        image: "https://m.media-amazon.com/images/I/81gAuHTwNsL._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "501",
    },
    {
        id: "2",
        title: "Children Of Time",
        price: 345.99,
        onSale: false,
        image: "https://m.media-amazon.com/images/I/81WdWq49ZzL._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "502",
    },
    {
        id: "3",
        title: "The Book Thief",
        price: 455.56,
        onSale: true,
        image: "https://m.media-amazon.com/images/I/91JGwQlnu7L._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "503",
    },
    {
        id: "4",
        title: "The Complete Novel Of Sherlock Holmes",
        price: 740.45,
        onSale: false,
        image: "https://m.media-amazon.com/images/I/814BAk-r5HL._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "504",
    },
    {
        id: "5",
        title: "House Of Salt And Sorrows",
        price: 650.99,
        onSale: true,
        image: "https://m.media-amazon.com/images/I/A1ketA9rGxL._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "501",
    },
    {
        id: "6",
        title: "The Calculating Stars",
        price: 455.99,
        onSale: true,
        image: "https://m.media-amazon.com/images/I/81rQPNFEBkL._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "502",
    },
    {
        id: "7",
        title: "The Nightingale",
        price: 400.99,
        onSale: true,
        image: "https://m.media-amazon.com/images/I/81xx0Bm7wmL._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "503",
    },
    {
        id: "8",
        title: "Beauty And The Beast",
        price: 677.99,
        onSale: false,
        image: "https://m.media-amazon.com/images/I/81GQJFgkvoL._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "501",
    }, {
        id: "9",
        title: "Beyond Infinity",
        price: "340.99",
        onSale: true,
        image: "https://m.media-amazon.com/images/I/71QwGBklFxL._AC_UY327_FMwebp_QL65_.jpg",
        categoryId: "502"
    }
]

const categories = [
    {
        id: "501",
        name: "Fantacy",
    },
    {
        id: "502",
        name: "Science Fiction",
    },
    {
        id: "503",
        name: "Historical",
    },
    {
        id: "504",
        name: "Mystery",
    },
]

exports.db = {
    books,
    categories
}