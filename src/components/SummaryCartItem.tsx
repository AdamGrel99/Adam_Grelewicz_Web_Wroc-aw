import type CartItem from "../model/CartItem";
import styles from "./SummaryCartItem.module.css";

interface SummaryCartItemProps {
  item: CartItem;
}

function SummaryCartItem({ item }: SummaryCartItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.details}>
        <div className={styles.label}>Nazwa:</div>
        <div>{item.name}</div>
        <div className={styles.label}>Ilość:</div>
        <div>{item.count}</div>
        <div className={styles.label}>Cena:</div>
        <div>{item.price.toFixed(2)} zł</div>
        <div className={styles.label}>Suma częściowa:</div>
        <div>{item.finalPrice.toFixed(2)} zł</div>
      </div>
    </div>
  );
}

export default SummaryCartItem;
