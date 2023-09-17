import { gql, useQuery } from "@apollo/client";

const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      title
      price
      image
      onSale
      category {
        name
      }
    }
  }
`;

const useBook = (id: string | undefined) => {
  const { error, loading, data } = useQuery(GET_BOOK, {
    variables: {
      id,
    },
  });

  return { error, loading, data };
};

export default useBook;
