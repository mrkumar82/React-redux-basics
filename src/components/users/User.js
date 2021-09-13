import React from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <div>
      <Link to={`/user-detail/${user.id}`}>
        <img src={user.avatar} alt={user.first_name} />
        <h4>
          {user.first_name} {user.last_name}
        </h4>
        <h5>Email : {user.email}</h5>
      </Link>
    </div>
  );
}

export default User;
