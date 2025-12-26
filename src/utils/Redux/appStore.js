import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import searchSlice from "./Slices/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchSlice,
  },
});

export default appStore;
