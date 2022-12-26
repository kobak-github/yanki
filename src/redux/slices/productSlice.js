import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: [],
  isLoading: true,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setProduct, setIsLoading } = productSlice.actions;

export default productSlice.reducer;
