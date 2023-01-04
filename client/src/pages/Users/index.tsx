import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUsersData } from "../../store/selectors";
import classes from "./UsersPage.module.scss";
import { getUsersDataHelper } from "./helpers";
import { generateUsers, deleteUsers } from "../../store/queries";

import UsersTable from "./UsersTable";

const UsersPage: FC = () => {
  const dispatch = useAppDispatch();
  const { users, totalItems, isLoading } = useAppSelector(getUsersData);
  const getUsers = () => getUsersDataHelper(totalItems);
  const generateUsersData = () => dispatch(generateUsers());
  const deleteUsersData = () => dispatch(deleteUsers());
  const isActionsBtn = !totalItems || (totalItems && !users?.length);
  const isGetUsersFunc = !totalItems ? false : true;
  const actionBtnText =
    totalItems && !users?.length
      ? `There are ${totalItems} users. Do you want to get them? Press here!`
      : "Do you want to generate users? Press here!";
  return (
    <div className={classes.UsersPage}>
      <section className={classes.UsersPage__actions}>
        {isActionsBtn ? (
          <button
            className={classes.UsersPage__actions_actionBtn}
            onClick={isGetUsersFunc ? getUsers : generateUsersData}
            disabled={isLoading}
          >
            {actionBtnText}
          </button>
        ) : (
          <button
            className={classes.UsersPage__actions_deleteBtn}
            onClick={deleteUsersData}
            disabled={isLoading}
          >
            Delete users?
          </button>
        )}
      </section>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
