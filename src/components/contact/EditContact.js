import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editContact } from "../../actions/action";

function EditContact() {
  const contact = useSelector((state) => state.contactReducer.contacts);
  const dispatch = useDispatch();

  const { id } = useParams();
  const filterItem = contact.find((item) => item.id == id);
  const [name, setName] = useState(filterItem.name);
  const [email, setEmail] = useState(filterItem.email);
  const [phone, setPhone] = useState(filterItem.phone);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const editContactItem = {
      id: +id,
      name: name,
      email: email,
      phone: phone
    };
    dispatch(editContact(editContactItem));
    history.push("/");
  };

  return (
    <div className="container">
      <h4>Edit Contact</h4>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field ">
              <input
                type="text"
                value={name}
                className="validate"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </div>
            <div className="input-field ">
              <input
                type="email"
                value={email}
                className="validate"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-field ">
              <input
                type="tel"
                value={phone}
                className="validate"
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>Phone</label>
            </div>
            <div className="input-field left-align">
              <button className="btn">Update Contact</button> &nbsp;
              <Link className="btn" to="/">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
