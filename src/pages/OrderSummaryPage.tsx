import { useNavigate } from "react-router-dom";
import styles from "./OrderSummaryPage.module.css";
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
      <h1 className={styles.title}>Podsumowanie Zamówienia</h1>
      <h2 className={styles.itemsTitle}>Przedmioty w Koszyku</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <SummaryCartItem key={item.name} item={item} />)
      ) : (
        <div className={styles.emptyCart}>Koszyk jest pusty.</div>
      )}

      <h2 className={styles.totalTitle}>Łączna Kwota Zamówienia</h2>
      <div className={styles.totalPrice}>{totalPrice.toFixed(2)} zł</div>

      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={handlePlaceOrder}>
          Złóż Zamówienie
        </button>
        <button
          className={`${styles.actionButton} ${styles.backButton}`}
          onClick={() => navigate("/cart")}
        >
          Wróć do Koszyka
        </button>
      </div>
    </>
  );
}

export default OrderSummaryPage;
