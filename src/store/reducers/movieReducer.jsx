import { createSlice } from '@reduxjs/toolkit'

export const movieReducer = createSlice({
  name: 'movie',
  initialState: {
    info: null,
  },
  reducers: {
    loadMovie:(state,action)=>{
        state.info = action.payload;
    },
    clearMovie:(state)=>{
        state.info = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadMovie,clearMovie } = movieReducer.actions

export default movieReducer.reducer