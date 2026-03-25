import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity++;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existing = state.cartItems.find(i => i.id === id);

      if (existing) {
        state.totalQuantity -= existing.quantity;
      }

      state.cartItems = state.cartItems.filter(i => i.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.cartItems.find(i => i.id === id);

      if (!item) return;

      if (type === "increment") {
        item.quantity++;
        state.totalQuantity++;
      } else if (type === "decrement" && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
      }
    },

  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;