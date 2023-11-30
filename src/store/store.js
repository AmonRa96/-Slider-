import { configureStore } from "@reduxjs/toolkit";
import carrouselDataReducer from "./carrouselSlice";

export default configureStore({
  reducer: {
    carrouselSlice: carrouselDataReducer,
  },
});