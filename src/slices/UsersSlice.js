import users from "../data/users.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users,
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      return state.users;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
