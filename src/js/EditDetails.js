import React, { Component, Fragment, useState } from "react";

// import "@fortawesome/fontawesome-free/css";
import EditCandidates from "./EditCandidates";

class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x1b53a6e8d57a343de37c09833fec13f8a7fdc3b2",
      isOpen: false,
      name: "",
      post: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick = (name, post) => {
    console.log(name, post);
    this.props.eth
      .removeCandidate(name, post, { from: this.props.account })
      .then((res) => console.log(res));
  };
  toggleModal = (post) => {
    this.setState({
      isOpen: !this.state.isOpen,
      post: post,
    });
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  addCandidate = (post) => {
    console.log(this.state.name, this.state.post);
    this.props.eth
      .addCandidate(this.state.name, this.state.post, {
        from: this.props.account,
      })
      .then((res) => console.log(res));
  };
  render() {
    // console.log(this.props.account);
    // console.log(this.state.account);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-2">
            {this.props.account === this.state.account ? (
              <EditCandidates
                props={this.props}
                handleClick={this.handleClick}
                toggle={this.toggleModal}
                isOpen={this.state.isOpen}
                onChange={this.handleChange}
                addCandidate={this.addCandidate}
              />
            ) : (
              <h1>You are not authorized to edit the details</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

//   // <h1>Hi</h1>
export default EditDetails;
