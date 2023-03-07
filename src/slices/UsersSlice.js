import users from "../data/users.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      return state.users;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { getUsers, addUser } = usersSlice.actions;

export default usersSlice.reducer;
