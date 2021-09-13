import React from "react";

function AddContact() {
  return (
    <div className="container">
      <h4>Add Contact</h4>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field ">
              <input type="text" className="validate" />
              <label>Name</label>
            </div>
            <div className="input-field ">
              <input type="email" className="validate" />
              <label>Email</label>
            </div>
            <div className="input-field ">
              <input type="tel" className="validate" />
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
