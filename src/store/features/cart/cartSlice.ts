import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type CartItem from "../../../model/CartItem";
import type Product from "../../../model/Product";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
      const itemPrice = action.payload.price.main + action.payload.price.fractional / 100;
      if (itemIndex !== -1) {
        state.items[itemIndex].count += 1;
        state.items[itemIndex].finalPrice = itemPrice * state.items[itemIndex].count;
      } else {
        state.items.push({
          name: action.payload.name,
          count: 1,
          price: itemPrice,
          finalPrice: itemPrice
        });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateItemCount: (state, action: PayloadAction<{ name: string; count: number }>) => {
      const itemToUpdate = state.items.find(item => item.name === action.payload.name);
      if (itemToUpdate && action.payload.count > 0) {
        itemToUpdate.count = action.payload.count;
        itemToUpdate.finalPrice = itemToUpdate.price * action.payload.count;
      } else if (itemToUpdate && action.payload.count <= 0) {
        state.items = state.items.filter(item => item.name !== action.payload.name);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateItemCount, clearCart } = cartSlice.actions;

export default cartSlice.reducer;