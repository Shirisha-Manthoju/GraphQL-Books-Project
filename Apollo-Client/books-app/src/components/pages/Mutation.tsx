import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@mui/material";

const ADD_BOOK = gql`
  mutation AddBook(
    $title: String!
    $image: String!
    $price: Float!
    $onSale: Boolean!
    $categoryId: Int!
  ) {
    addBook(
      input: {
        title: $title
        image: $image
        price: $price
        onSale: $onSale
        categoryId: $categoryId
      }
    ) {
      title
      image
      price
      onSale
      categoryId
    }
  }
`;

const Mutation = () => {
  const [createBook, { data, loading, error }] = useMutation(ADD_BOOK);

  const handleAddBook = () => {
    createBook({
      variables: {
        title: "book1",
        image: "img1",
        price: 234.45,
        onSale: true,
        categoryId: 501,
      },
    });
  };

  console.log(data, loading, error);

  return (
    <div>
      <Button onClick={handleAddBook}>Add Book</Button>
    </div>
  );
};

export default Mutation;
