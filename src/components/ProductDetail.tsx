import type Product from "../model/Product";

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductDetail({ product, onAddToCart }: ProductDetailProps) {
  const handleAddToCartClick = () => {
    onAddToCart(product);
  };

  return (
    // TODO
    // key should have unique value
    <div key={product.id}>
      <div>
        {product.name} - {product.price.main},{product.price.fractional} zł
      </div>
      <button onClick={handleAddToCartClick}>Dodaj do koszyka</button>
    </div>
  );
}

export default ProductDetail;
