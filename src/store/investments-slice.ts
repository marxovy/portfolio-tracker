import { createSlice } from "@reduxjs/toolkit";

import investmentsMock from "../mocks/investmentsData.json";

const investmentsSlice = createSlice({
  name: "investments",
  initialState: { positions: investmentsMock, investmentInProgress: null },
  reducers: {
    increaseInvestment(state, action) {
      const newPosition = action.payload;
      const existingPosition = state.positions.find(
        (position) => position.id === state.investmentInProgress
      );

      existingPosition.value += +newPosition.value;
      state.investmentInProgress = null;
    },
    togglePosition(state, action) {
      const id = action.payload;
      const existingPosition = state.positions.find(
        (position) => position.id === id
      );
      existingPosition.status =
        existingPosition.status === "Active" ? "Closed" : "Active";
    },
    openInvestmentModal(state, action) {
      const id = action.payload;
      state.investmentInProgress = id;
    },
    closeInvestmentModal(state) {
      state.investmentInProgress = null;
    },
  },
});

export const investmentActions = investmentsSlice.actions;
export default investmentsSlice;
