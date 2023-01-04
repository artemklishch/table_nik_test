import { store } from "../../store";
import { getUsers } from "../../store/queries";
import { setIsLoading } from "../../store/userSlice";
const MAX_DATA_NUMBER_TO_RESPONSE = 10000;

type getUsersDataHelperType = (totalItems: number) => void;

export const getUsersDataHelper: getUsersDataHelperType = async (
  totalItems
) => {
  store.dispatch(setIsLoading(true));
  const queryNumber = Math.ceil(totalItems / MAX_DATA_NUMBER_TO_RESPONSE);
  for (let i = 0; i < queryNumber; i++) {
    if (totalItems === 0) {
      break;
    }
    await store.dispatch(getUsers(String(i)));
    if (i === 0) {
      store.dispatch(setIsLoading(false));
    }
  }
};
