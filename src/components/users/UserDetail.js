import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetail() {
  const id = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchDetail = async () => {
    const resp = await axios
      .get(`https://reqres.in/api/users/${id.id}`)
      .catch((error) => {
        console.log(error);
      });
    setUser(resp.data.data);
    setLoading(true);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div>
      {loading && (
        <div>
          <img src={user.avatar} alt=" {user.first_name}" />
          <h4>
            {user.first_name} {user.last_name}
          </h4>
          <p>Email : {user.email} </p>
        </div>
      )}
    </div>
  );
}

export default UserDetail;
