import React from "react";
import useBook from "../hooks/useBook";
import { useParams } from "react-router-dom";
import "./BooksList.css";

const Books = () => {
  const { id } = useParams();
  const { data, loading, error } = useBook(id);

  console.log(error, loading, data);

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="SingleBook">
      <img src={data.book.image} alt="not found" />
      <div className="book">
        <h3>Title: {data.book.title}</h3>
        <p>Price: Rs. {data.book.price} /-</p>
        <p>On Sale: {data.book.onSale ? "Yes" : "No"}</p>
        <p>Category: {data.book.category.name}</p>
      </div>
    </div>
  );
};

export default Books;
