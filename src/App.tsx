import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import ProductListPage from "./pages/ProductListPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/summary" element={<OrderSummaryPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
