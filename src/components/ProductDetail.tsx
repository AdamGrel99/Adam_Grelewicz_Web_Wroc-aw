import type Product from "../model/Product";
import { useAppDispatch } from "../store/hooks";
import { addItem } from "../store/features/cart/cartSlice";
import styles from "./ProductDetail.module.css"; // Importuj style jako obiekt 'styles'

interface ProductDetailProps {
  product: Product;
}

function ProductDetail({ product }: ProductDetailProps) {
  const dispatch = useAppDispatch();

  const handleAddToCartClick = () => {
    dispatch(addItem(product));
  };

  return (
    <div className={styles.item}>
      <div className={styles.productRow}>
        {product.name} - {product.price.main},{product.price.fractional} zł
      </div>
      <button className={styles.addButton} onClick={handleAddToCartClick}>
        Dodaj do koszyka
      </button>
    </div>
  );
}

export default ProductDetail;
