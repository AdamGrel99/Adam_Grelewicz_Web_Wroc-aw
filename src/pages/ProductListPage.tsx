import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../products.json";

import ProductDetail from "../components/ProductDetail";
import type Product from "../model/Product";

function ProductListPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const navigate = useNavigate();

  const addToCart = (productToAdd: Product) => {
    setCart((prevCart) => [...prevCart, productToAdd]);
  };

  return (
    <>
      <h1>Lista Produktów</h1>
      {productsData.map((product) => (
        <ProductDetail
          // TODO
          // key should have unique value
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
      <button
        onClick={() => {
          navigate("/cart", { state: { cartItems: cart } });
        }}
      >
        Przejdź do koszyka
      </button>
    </>
  );
}

export default ProductListPage;
