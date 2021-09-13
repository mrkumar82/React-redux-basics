import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function Users() {
  const users = useSelector((state) => state.homeReducer);
  const { data } = users.users;

  return (
    <div>
      {data &&
        data.map((user) => {
          return <User key={user.id} user={user} />;
        })}
    </div>
  );
}

export default Users;
