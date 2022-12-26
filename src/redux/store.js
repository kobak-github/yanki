import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './slices/catalogSlice';
import sortSlice from './slices/sortSlice';
import searchSlice from './slices/searchSlice';
import productSlice from './slices/productSlice';
import paginationSlice from './slices/paginationSlice';

export const store = configureStore({
  reducer: { catalogSlice, sortSlice, searchSlice, productSlice, paginationSlice },
});
