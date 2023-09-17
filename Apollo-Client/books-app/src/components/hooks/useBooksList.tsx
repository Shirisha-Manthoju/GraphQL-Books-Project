import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      image
      price
      onSale
      category {
        name
      }
    }
  }
`;

const useBooksList = () => {
  const { error, loading, data } = useQuery(GET_BOOKS);

  return { error, loading, data };
};

export default useBooksList;
