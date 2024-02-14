import { configureStore } from "@reduxjs/toolkit";

import investmentsSlice from "./investments-slice";
import uiSlice from "./ui-slice";
import settingsSlice from "./settings";

export type IRootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
    investments: investmentsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
