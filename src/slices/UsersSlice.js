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
  },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;
