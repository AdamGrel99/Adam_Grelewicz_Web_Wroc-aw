import { useNavigate } from "react-router-dom";
import productsData from "../data/products.json";
import styles from "./ProductListPage.module.css";

import ProductDetail from "../components/ProductDetail";

import { useAppSelector } from "../store/hooks";
import { selectCartItems } from "../store/features/cart/selectors";

function ProductListPage() {
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);

  return (
    <div>
      <h1 className={styles.title}>Lista Produktów</h1>
      <div className={styles.productList}>
        {productsData.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
      </div>
      <button
        className={styles.cartButton}
        onClick={() => {
          navigate("/cart");
        }}
      >
        Przejdź do koszyka (
        {cartItems.reduce((sum, item) => sum + item.count, 0)})
      </button>
    </div>
  );
}

export default ProductListPage;
