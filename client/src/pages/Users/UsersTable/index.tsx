import { FC } from "react";
import { useAppSelector } from "../../../store/hooks";
import { getUsersData } from "../../../store/selectors";

import { Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";

import Spinner from "../../../components/Spinner";

const UsersTable: FC = () => {
  const { users, isLoading } = useAppSelector(getUsersData);
  const tableHeight = window.innerHeight - 400;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : users?.length ? (
        <Table
          width={window.innerWidth - 50}
          height={tableHeight}
          headerHeight={20}
          rowHeight={30}
          rowCount={users.length}
          rowGetter={({ index }) => users[index]}
        >
          <Column
            label="№"
            dataKey="index"
            width={100}
            cellRenderer={({ rowIndex }) => rowIndex + 1}
          />
          <Column width={200} label="Username" dataKey="username" />
          <Column width={200} label="First Name" dataKey="firstName" />
          <Column width={200} label="Last Name" dataKey="lastName" />
          <Column width={200} label="Age" dataKey="age" />
          <Column width={200} label="Income" dataKey="income" />
        </Table>
      ) : (
        <h2>No users yet</h2>
      )}
    </>
  );
};

export default UsersTable;
