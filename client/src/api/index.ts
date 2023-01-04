import endpoints from "./endpoints";

export const fetchUsersNumberData = async () => {
  const response = await fetch(
    process.env.REACT_APP_BASE_URL + endpoints.getUsersNumber
  );
  if (!response.ok || response.status !== 200) {
    throw new Error();
  }
  const data = response.json();
  return data;
};

export const fetchUsers = async (pageNumber: string) => {
  const response = await fetch(
    process.env.REACT_APP_BASE_URL + endpoints.users,
    {
      method: "GET",
      headers: {
        Page: pageNumber,
      },
    }
  );
  if (!response.ok || response.status !== 200) {
    throw new Error();
  }
  const data = response.json();
  return data;
};

export const generateUsersData = async () => {
  const response = await fetch(
    process.env.REACT_APP_BASE_URL + endpoints.users,
    {
      method: "POST",
    }
  );
  if (!response.ok || response.status !== 201) {
    throw new Error();
  }
  const data = response.json();
  return data;
};

export const deleteUsersData = async () => {
  const response = await fetch(
    process.env.REACT_APP_BASE_URL + endpoints.users,
    {
      method: "DELETE",
    }
  );
  if (!response.ok || response.status !== 200) {
    throw new Error();
  }
  const data = response.json();
  return data;
};
