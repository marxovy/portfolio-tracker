import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    firstName: "John",
    lastName: "Doe",
    age: null,
  },
  reducers: {
    updateProfile(state, action) {
      const { firstName, lastName, age } = action.payload;

      state.firstName = firstName;
      state.lastName = lastName;
      state.age = age;
    },
  },
});

export const settingsActions = settingsSlice.actions;
export default settingsSlice;
