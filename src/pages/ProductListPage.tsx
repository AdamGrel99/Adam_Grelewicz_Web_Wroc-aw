import { useNavigate } from "react-router-dom";
import productsData from "../data/products.json";

import ProductDetail from "../components/ProductDetail";

import { useAppSelector } from "../store/hooks";
import { selectCartItems } from "../store/features/cart/selectors";

function ProductListPage() {
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);

  return (
    <>
      <h1>Lista Produktów</h1>
      {productsData.map((product) => (
        // TODO
        // key should have unique value
        <ProductDetail key={product.id} product={product} />
      ))}
      <button
        onClick={() => {
          navigate("/cart");
        }}
      >
        Przejdź do koszyka (
        {cartItems.reduce((sum, item) => sum + item.count, 0)})
      </button>
    </>
  );
}

export default ProductListPage;
