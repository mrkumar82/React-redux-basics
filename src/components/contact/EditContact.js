import React from "react";

function EditContact() {
  return (
    <div className="container">
      <h4>Edit Contact</h4>
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
              <button className="btn">Update Contact</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
