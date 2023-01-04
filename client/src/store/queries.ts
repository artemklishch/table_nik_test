import { AppThunk } from ".";
import {
  deleteUsersData,
  fetchUsers,
  fetchUsersNumberData,
  generateUsersData,
} from "../api/index";
import { clearData, setIsLoading, setTotalItems, setUsers } from "./userSlice";

export const getUsersNumberAction = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const usersNumberData = await fetchUsersNumberData();
      dispatch(setTotalItems(usersNumberData.totalItems));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.error("Failed to fetch data!");
      dispatch(setIsLoading(false));
    }
  };
};

export const getUsers = (pageNumber: string): AppThunk => {
  return async (dispatch) => {
    try {
      const usersData = await fetchUsers(pageNumber);
      dispatch(setUsers(usersData.users));
    } catch (err) {
      console.error("Failed to fetch data!");
    }
  };
};

export const generateUsers = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const res = await generateUsersData();
      console.log("res", res);
      dispatch(setTotalItems(res.totalItems));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.error("Failed to generate data!");
      dispatch(setIsLoading(false));
    }
  };
};

export const deleteUsers = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      await deleteUsersData();
      dispatch(clearData());
      dispatch(setIsLoading(false));
    } catch (err) {
      console.error("Failed to generate data!");
      dispatch(setIsLoading(false));
    }
  };
};
