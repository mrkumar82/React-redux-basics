import React from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <div className="card-content">
            <h4>
              {user.first_name} {user.last_name}
            </h4>
            <h5>Email : {user.email}</h5>
          </div>
          <div className="card-action">
            <Link to={`/user-detail/${user.id}`}>Detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
