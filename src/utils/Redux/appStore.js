import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import searchSlice from "./Slices/searchSlice";
import chatSlice from "./Slices/chatSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;
