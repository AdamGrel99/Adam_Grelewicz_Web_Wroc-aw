import type CartItem from "../model/CartItem";
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
    <div>
      {item.name} - {item.price} zł (Ilość: {item.count}, Suma:{" "}
      {item.finalPrice.toFixed(2)})
      <button onClick={() => handleUpdateItemCount(item.name, item.count + 1)}>
        +
      </button>
      <button onClick={() => handleUpdateItemCount(item.name, item.count - 1)}>
        -
      </button>
      <button onClick={() => handleRemoveItem(item.name)}>Usuń</button>
    </div>
  );
}

export default ItemCartDetail;
