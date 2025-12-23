import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default appStore;
