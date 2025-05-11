import type CartItem from "../../../model/CartItem";
import type { RootState } from "../../store";

export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;

export const selectCartTotalPrice = (state: RootState): number =>
  state.cart.items.reduce((total, item) => total + item.finalPrice, 0);