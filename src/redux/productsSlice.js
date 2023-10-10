import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: productsData,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );
      product.isFavorite = !product.isFavorite;
    },
  },
});

export default productsSlice;
