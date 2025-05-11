import type CartItem from "../model/CartItem";

interface SummaryCartItemProps {
  item: CartItem;
}

function SummaryCartItem({ item }: SummaryCartItemProps) {
  return (
    <div>
      <div>Nazwa: {item.name}</div>
      <div>Ilość: {item.count}</div>
      <div>Cena: {item.price.toFixed(2)} zł</div>
      <div>Suma częściowa: {item.finalPrice.toFixed(2)} zł</div>
      <br />
    </div>
  );
}

export default SummaryCartItem;
