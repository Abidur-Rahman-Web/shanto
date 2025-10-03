import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);
  const fetchApi = async () => {
    try {
      const res = await fetch(
        "https://68dbf4a3445fdb39dc2735e6.mockapi.io/api/test/users"
      );
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div> {users == null ? "Loading..." : "DATA FETCHD"}</div>
      {users &&
        users.map((user) => (
          <p key={user.id}>
            {user.id} = {user.name}
          </p>
        ))}
    </div>
  );
};

export default Users;
