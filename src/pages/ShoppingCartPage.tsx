import { useLocation } from "react-router-dom";
import type Product from "../model/Product";

interface LocationState {
  cartItems: Product[];
}

function ShoppingCartPage() {
  const location = useLocation();
  const { cartItems } = location.state as LocationState;

  return (
    <>
      <div>Koszyk</div>
      {cartItems.map((item) => (
        // TODO
        // key should have unique value
        <div key={item.id}>
          {item.name} - {item.price.main},{item.price.fractional} zł
        </div>
      ))}
    </>
  );
}

export default ShoppingCartPage;
