import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openPopup: false,
  selected: { id: 0, name: 'умолчанию', sortProperty: '-id' },
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setOpenPopup: (state, action) => {
      state.openPopup = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setOpenPopup, setSelected } = sortSlice.actions;

export default sortSlice.reducer;
