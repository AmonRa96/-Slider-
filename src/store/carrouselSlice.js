import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";


const carrouselDataSlice = createSlice({
  name: "carrouselSlice",
  initialState: {
   width: 450, 
   carrouselData :data,
  },
  reducers: {
    setItems(state,payload){
      state.carrouselData = payload
    },
   setWidth(state,{payload}){
   state.width= payload
  },
 
   
  },
});

export const {setItems, setWidth} =carrouselDataSlice.actions;
export default carrouselDataSlice.reducer;