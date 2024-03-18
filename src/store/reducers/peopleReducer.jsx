import { createSlice } from '@reduxjs/toolkit'

export const peopleReducer = createSlice({
  name: 'people',
  initialState: {
    info: null,
  },
  reducers: {
    loadPeople:(state,action)=>{
        state.info = action.payload;
    },
    clearPeople:(state,action)=>{
        state.info = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadPeople,clearPeople } = peopleReducer.actions

export default peopleReducer.reducer