import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setUsers } from "../../actions/action";
import axios from "axios";
import Users from "../users/Users";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const resp = await axios
      .get("https://reqres.in/api/users")
      .catch((error) => {
        console.log(error);
      });

    dispatch(setUsers(resp.data));
    setLoading(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h4>Home component</h4>
      {loading ? <Users /> : "Loading"}
    </div>
  );
}

export default Home;
