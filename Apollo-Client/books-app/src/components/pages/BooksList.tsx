import "./BooksList.css";
import { BookProps } from "../../utils/types";
import useBooksList from "../hooks/useBooksList";
import { Link } from "react-router-dom";

const BooksList = () => {
  const { error, loading, data } = useBooksList();

  console.log(error, loading, data);

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="BooksList">
      {data.books.map((book: BookProps, index: number) => (
        <div key={index} className="book">
          <Link to={`/${book.id}`}>
            <h3>Title: {book.title} </h3>
          </Link>
          <img src={book.image} alt="not found" />
          <p>Price: Rs. {book.price} /-</p>
          <p>On Sale: {book.onSale ? "Yes" : "No"}</p>
          <p>Category: {book.category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
