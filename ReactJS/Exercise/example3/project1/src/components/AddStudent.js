import React, { Component } from "react";

export class AddStudent extends Component {
  state = {
    name: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.AddStu(this.state.name);
    this.setState({ name: "" });
    // console.log("onsubmit works");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(e.target.name, "--", e.target.value);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="ml-5 mt-5 form-row">
        <label className="col-1">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.onChange}
          className="ml-1 mt-5 form-control col-5"
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-dark ml-3 col-3"
          onClick={this.props.disp}
        />
      </form>
    );
  }
}

export default AddStudent;
