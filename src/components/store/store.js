import { configureStore } from "@reduxjs/toolkit";
import sliderDataReducer from "./sliderSlice";

export default configureStore({
  reducer: {
    sliderSlice: sliderDataReducer,
  },
});