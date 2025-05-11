import { useNavigate } from "react-router-dom";
import styles from "./ShoppingCartPage.module.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../store/features/cart/selectors";
import ItemCartDetail from "../components/ItemCartDetail";
import { clearCart } from "../store/features/cart/cartSlice";

function ShoppingCartPage() {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className={styles.title}>Koszyk</h1>
      {cartItems.length > 0 ? (
        <div className={styles.cartItemsList}>
          {cartItems.map((item) => (
            <ItemCartDetail key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyCart}>Koszyk jest pusty.</div>
      )}
      <div className={styles.totalPrice}>
        Suma całkowita: {totalPrice.toFixed(2)} zł
      </div>
      <div className={styles.actions}>
        <button
          className={styles.actionButton}
          onClick={() => {
            if (cartItems.length > 0) {
              navigate("/summary");
            }
          }}
        >
          Przejdź do podsumowania zamówienia
        </button>
        <button
          className={styles.actionButton}
          onClick={() => {
            dispatch(clearCart());
            navigate("/");
          }}
        >
          Powrót do listy produktów
        </button>
        <button className={styles.actionButton} onClick={() => navigate("/")}>
          Dodaj nowe produkty
        </button>
      </div>
    </>
  );
}

export default ShoppingCartPage;
