import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartProduct = {
  id: string;
  name: string;
  imageId: string;
  quantity: number;
  color: string;
  size: string;
  price: number;
};

type InitialState = {
  products: CartProduct[];
};

const initialState: InitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clear: (state) => {
      state.products = [];
    },
    add: (state, action: PayloadAction<CartProduct>) => {
      state.products = [...state.products, action.payload];
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id,
      );
    },
  },
});

export const { clear, add, remove } = cartSlice.actions;

export default cartSlice.reducer;
