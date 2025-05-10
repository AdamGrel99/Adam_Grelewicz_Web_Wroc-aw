export default interface Product {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
}