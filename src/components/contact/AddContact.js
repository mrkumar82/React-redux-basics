import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/action";

function AddContact() {
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: new Date().getTime(),
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value
    };
    dispatch(addContact(contact));
    history.push("/");
  };

  return (
    <div className="container">
      <h4>Add Contact</h4>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field ">
              <input ref={name} type="text" className="validate" />
              <label>Name</label>
            </div>
            <div className="input-field ">
              <input ref={email} type="email" className="validate" />
              <label>Email</label>
            </div>
            <div className="input-field ">
              <input ref={phone} type="tel" className="validate" />
              <label>Phone</label>
            </div>
            <div className="input-field left-align">
              <button className="btn">Add Contact</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
