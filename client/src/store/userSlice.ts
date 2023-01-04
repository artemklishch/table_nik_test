import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  age: number;
  income: number;
  avatar: string;
  username: string;
};
export interface UsersState {
  value: number;
  users: User[];
  totalItems: number;
  isLoading: boolean;
}
const initialState: UsersState = {
  value: 0,
  users: [],
  totalItems: 0,
  isLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setTotalItems(state, action: PayloadAction<number>) {
      state.totalItems = action.payload;
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = state.users.concat(action.payload);
    },
    clearData(state) {
      state.totalItems = 0;
      state.users = [];
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setTotalItems, setUsers, clearData, setIsLoading } =
  usersSlice.actions;

export default usersSlice.reducer;
