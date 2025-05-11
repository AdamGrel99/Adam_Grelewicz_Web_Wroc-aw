import type CartItem from "../model/CartItem";
import styles from "./ItemCartDetail.module.css";
import { removeItem, updateItemCount } from "../store/features/cart/cartSlice";
import { useAppDispatch } from "../store/hooks";

interface ItemCartDetailProps {
  item: CartItem;
}

function ItemCartDetail({ item }: ItemCartDetailProps) {
  const dispatch = useAppDispatch();

  const handleRemoveItem = (itemName: string) => {
    dispatch(removeItem(itemName));
  };

  const handleUpdateItemCount = (itemName: string, newCount: number) => {
    dispatch(updateItemCount({ name: itemName, count: newCount }));
  };

  return (
    <div className={styles.item}>
      <div className={styles.details}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.priceInfo}>
          Cena: {item.price} zł, Suma: {item.finalPrice.toFixed(2)} zł
        </div>
      </div>
      <div className={styles.count}>
        <button
          className={styles.countButton}
          onClick={() => handleUpdateItemCount(item.name, item.count + 1)}
        >
          +
        </button>
        <span>Ilość: {item.count}</span>
        <button
          className={styles.countButton}
          onClick={() => handleUpdateItemCount(item.name, item.count - 1)}
        >
          -
        </button>
      </div>
      <button
        className={styles.removeButton}
        onClick={() => handleRemoveItem(item.name)}
      >
        Usuń
      </button>
    </div>
  );
}

export default ItemCartDetail;
