import { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions";
import "./App.css";

function App(props) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userData = await props.fetchUsers();
      localStorage.setItem("users", [JSON.stringify(userData.users.data)]);
    };
    getUsers();
    setUserData(JSON.parse(localStorage.getItem("users")));
  }, []);

  const deleteHandler = (id) => {
    setUserData(userData.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                  <button>EDIT</button>
                </td>
                <td>
                  <button onClick={() => deleteHandler(item.id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(App);
