const USERS_URL = "https://reqres.in/api/users";
const pageNO = 1;

export const fetchUsers = () => {
  return (dispatch) => {
    return fetch(`${USERS_URL}?page=${pageNO}'`)
      .then((res) => res.json())
      .then((data) => dispatch(getUsers(data)))
      .catch((error) => console.log(error));
  };
};

export const getUsers = (data) => {
  return {
    type: "GET_DATA_FROM_API",
    users: data,
  };
};
