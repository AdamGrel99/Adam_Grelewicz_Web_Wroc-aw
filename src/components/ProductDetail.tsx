import type Product from "../model/Product";

import { useAppDispatch } from "../store/hooks";
import { addItem } from "../store/features/cart/cartSlice";

interface ProductDetailProps {
  product: Product;
}

function ProductDetail({ product }: ProductDetailProps) {
  const dispatch = useAppDispatch();

  const handleAddToCartClick = () => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <div>
        {product.name} - {product.price.main},{product.price.fractional} zł
      </div>
      <button onClick={handleAddToCartClick}>Dodaj do koszyka</button>
    </div>
  );
}

export default ProductDetail;
