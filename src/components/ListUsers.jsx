import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ListUsers() {
  const dispatch = useDispatch();
  //   const users1 = useSelector((state) => state.users);
  const users = [
    {
      name: "John Doe",
      age: 32,
      email: "john@gmail.com",
    },
    {
      name: "John Doe",
      age: 32,
      email: "john@gmail.com",
    },
    {
      name: "John Doe",
      age: 32,
      email: "john@gmail.com",
    },
  ];
  return (
    <div>
      <Link to="add">Add User</Link>
      <table>
        <thead>
          <tr>
            <th>Name ↓</th>
            <th>Age ↑</th>
            <th>Email ↓</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUsers;
