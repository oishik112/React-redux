import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.css";

class UserForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    const Name = this.getName.value;
    const Address = this.getAddress.value;

    const email = this.getEmail.value;
    const Phone = this.getPhone.value;
    const user = { firstName:firstName, lastName:lastName, email:email };

    this.props.addUser(user);
    this.props.AddClicked();
  };

  render() {
    return (
      <div>
        <h3>Add</h3>
        <br />
        <div className="container">
          <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <label>Name</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="Name"
                type="text"
                ref={input => (this.getName = input)}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="Address"
                type="text"
                ref={input => (this.getAddress = input)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="email"
                type="text"
                ref={input => (this.getEmail = input)}
              />
            </div>
            <div className="form-group">
              <label>Phone no</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="phone"
                type="text"
                ref={input => (this.getPhone = input)}
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(UserForm);
