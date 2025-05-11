import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../store/features/cart/selectors";
import SummaryCartItem from "../components/SummaryCartItem";

function OrderSummaryPage() {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    localStorage.setItem("orderItems", JSON.stringify(cartItems));
    localStorage.setItem("orderTotal", JSON.stringify(totalPrice));
    window.location.href = "/order-confirmation.html";
  };

  return (
    <>
      <h1>Podsumowanie Zamówienia</h1>
      <h2>Przedmioty w Koszyku</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <SummaryCartItem key={item.name} item={item} />)
      ) : (
        <div>Koszyk jest pusty.</div>
      )}

      <h2>Łączna Kwota Zamówienia</h2>
      <div>{totalPrice.toFixed(2)} zł</div>

      <button onClick={handlePlaceOrder}>Złóż Zamówienie</button>
      <button onClick={() => navigate("/cart")}>Wróć do Koszyka</button>
    </>
  );
}

export default OrderSummaryPage;
