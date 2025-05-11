export default interface CartItem {
  name: string,
  count: number,
  price: number,
  finalPrice: number // count * price
}