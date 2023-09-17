export type BookProps = {
  id: String;
  title: String;
  price: String;
  onSale: Boolean;
  image: string;
  category: CategoryProps;
};

export type CategoryProps = {
  name: String;
};
