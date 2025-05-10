import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductListPage from "./pages/ProductListPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/summary" element={<OrderSummaryPage />} />
        <Route path="/confirm" element={<OrderConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
