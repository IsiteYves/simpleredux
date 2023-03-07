import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ListUsers() {
  const [sortBy, setSortBy] = useState(["name", "asc"]);
  const users = useSelector((state) => state.users.users);
  const [displayedUsers, setDisplayedUsers] = useState([]);

  const sortUsersAsc = (property) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
    setDisplayedUsers(sortedUsers);
  };

  const sortUsersDesc = (property) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a[property] < b[property]) return 1;
      if (a[property] > b[property]) return -1;
      return 0;
    });
    setDisplayedUsers(sortedUsers);
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
    </div>
  );
}

export default ListUsers;
