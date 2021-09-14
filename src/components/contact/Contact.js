import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../actions/action";

function Contact() {
  const contacts = useSelector((state) => state);
  const contact = contacts.contactReducer.contacts;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h5>Contanct app</h5>
      <div className="container right-align">
        <Link className="btn" to="/add-contact">
          Add Contact
        </Link>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {contact &&
              contact.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <Link className="btn" to={`/edit-contact/${contact.id}`}>
                      Edit
                    </Link>
                    &nbsp;
                    <button
                      className="btn red"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
