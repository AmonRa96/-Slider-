import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";


const sliderDataSlice = createSlice({
  name: "sliderSlice",
  initialState: {
   sliderData:data, 
  },
  reducers: {
   nextAction(state){
    const firstElement = state.sliderData.shift()

    state.sliderData.push(firstElement);
  },
  prevAction(state){
const lastElement = state.sliderData.pop()
state.sliderData.unshift(lastElement)
  }
   
  },
});

export const {nextAction,prevAction} =sliderDataSlice.actions;
export default sliderDataSlice.reducer;