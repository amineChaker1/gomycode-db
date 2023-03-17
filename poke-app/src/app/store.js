import { configureStore } from "@reduxjs/toolkit";
import { pokeSlice } from "./pokeSlice";

export const store = configureStore({
  reducer: {
    [pokeSlice.reducerPath]: pokeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeSlice.middleware),
});
