import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: false
}

export const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    addLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
})

export const { addLanguage } = langSlice.actions;
export default langSlice.reducer;