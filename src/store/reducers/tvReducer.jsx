import { createSlice } from '@reduxjs/toolkit'

export const tvReducer = createSlice({
  name: 'tv',
  initialState: {
    info: null,
  },
  reducers: {
    loadtv:(state,action)=>{
        state.info = action.payload;
    },
    cleartv:(state,action)=>{
        state.info = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadtv,cleartv } = tvReducer.actions

export default tvReducer.reducer