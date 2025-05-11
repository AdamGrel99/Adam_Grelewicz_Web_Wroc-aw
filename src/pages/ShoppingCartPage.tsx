import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../store/features/cart/selectors";
import ItemCartDetail from "../components/ItemCartDetail";

function ShoppingCartPage() {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const navigate = useNavigate();

  return (
    <>
      <div>Koszyk</div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            // TODO
            // key should have unique value
            <ItemCartDetail key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <div>Koszyk jest pusty.</div>
      )}
      <div>Suma całkowita: {totalPrice.toFixed(2)} zł</div>
      <button onClick={() => navigate("/summary")}>
        Przejdź do podsumowania zamówienia
      </button>
      <button onClick={() => navigate("/")}>Powrót do listy produktów</button>
    </>
  );
}

export default ShoppingCartPage;
