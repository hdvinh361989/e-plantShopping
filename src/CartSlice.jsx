import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {payload}=action;
      const {cost}=payload
      state.items.push({...action.payload, quantity:1, costNumber: parseInt(cost.slice(1))})
    },
    removeItem: (state, action) => {
      state.items.splice(state.items.findIndex((item) => item.name === action.payload), 1);
    },
    updateQuantity: (state, action) => {
      state.items.find((item) => item.name === action.payload.name).quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
