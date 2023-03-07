import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "./Pagination/Pagination";

function ListUsers() {
  const [sortBy, setSortBy] = useState(["name", "asc"]);
  const users = useSelector((state) => state.users.users);
  const [displayedUsers, setDisplayedUsers] = useState([]);

  const sortUsersAsc = (property) => {
    const arr = displayedUsers.length === 0 ? users : displayedUsers;
    const sortedUsers = [...arr].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
    setDisplayedUsers(sortedUsers.slice(0, 5));
  };

  const sortUsersDesc = (property) => {
    const arr = displayedUsers.length === 0 ? users : displayedUsers;
    const sortedUsers = [...arr].sort((a, b) => {
      if (a[property] < b[property]) return 1;
      if (a[property] > b[property]) return -1;
      return 0;
    });
    setDisplayedUsers(sortedUsers.slice(0, 5));
  };

  const columns = [
    {
      name: "Name",
      property: "name",
    },
    {
      name: "Age",
      property: "age",
    },
    {
      name: "Email",
      property: "email",
    },
  ];

  const [activePage, setActivePage] = useState(1);
  const changeActivePage = (newPageNumber) => {
    setActivePage(newPageNumber);
    setDisplayedUsers(users.slice(5 * (newPageNumber - 1), newPageNumber * 5));
  };

  useEffect(() => {
    setDisplayedUsers(users.slice(0, 5));
  }, []);

  useEffect(() => {
    if (sortBy[1] === "asc") sortUsersAsc(sortBy[0]);
    else sortUsersDesc(sortBy[0]);
  }, [sortBy]);
  return (
    <div>
      <Link to="add">Add User</Link>
      <table>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th
                key={i}
                title={`Sort by ${column.name}`}
                onClick={() =>
                  setSortBy([
                    `${column.property}`,
                    `${sortBy[1] === "asc" ? "desc" : "asc"}`,
                  ])
                }
              >
                {column.name}{" "}
                {sortBy[0] === column.property && sortBy[1] === "desc"
                  ? "↑"
                  : "↓"}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        numberOfPages={Math.ceil(users.length / 5)}
        activePage={activePage}
        changeActivePage={(newPageNumber) => changeActivePage(newPageNumber)}
      />
    </div>
  );
}

export default ListUsers;
