import React from "react";
import { connect } from "react-redux";
import { editUser } from "../actions/userActions";
import User from "./User";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  componentDidMount() {
    let user = this.props.user;
    this.setState({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const id = this.state.id;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;

    const email = this.state.email;

    const user = {
      id,
      Name,
      Address,
      email,
      Phone
    };
    this.props.editUser(user);
  };

  render() {
    return (
      <div className="container">
        <h3>Edit </h3>
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-group">
            <label> Name </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.Name}
              onChange={e => {
                this.setState({ firstName: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label> Address</label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.Address}
              onChange={e => {
                this.setState({ Address: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> Email </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> phone </label>
            <input
              required
              type="number"
              className="form-control"
              value={this.state.Phone}
              onChange={e => {
                this.setState({ Phone: e.target.value });
              }}
            />
          </div>  
          <button className="btn btn-primary">Edit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { editUser }
)(UserEdit);
