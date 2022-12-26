import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogActiveId: 0,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogActiveId: (state, action) => {
      state.catalogActiveId = action.payload;
    },
  },
});

export const { setCatalogActiveId } = catalogSlice.actions;

export default catalogSlice.reducer;
