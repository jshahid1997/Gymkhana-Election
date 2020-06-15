import React, { Component, Fragment, useState } from "react";
import { connect } from "react-redux";

// import "@fortawesome/fontawesome-free/css";
import EditCandidates from "./EditCandidates";
import { addCandidate, deleteCandidate } from "../redux/ActionCreators";

class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0xb28d00609a993f5b2ba66d8e081d7f4dee3298f5",
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
      .removeCandidate(name.name, post, { from: this.props.account })
      .then((res) => {
        console.log(res);
        this.props.deleteCandidate(post, name);
      });
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
    post = this.state.post;
    var name = this.state.name;
    var count = 0;

    this.props.eth
      .addCandidate(this.state.name, this.state.post, {
        from: this.props.account,
      })
      .then((res) => {
        console.log(res);
        this.props.eth.candidatesCount().then((cnt) => {
          count = cnt.toNumber();
        });
        console.log(count);

        const CD = {
          id: count,
          name: name,
          voteCount: 0,
        };
        this.props.addCandidate(post, CD);
      });
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

const mapActionsToProps = {
  addCandidate,
  deleteCandidate,
};

const mapStateToProps = (state) => {
  return {
    VP: state.VP.VP,
    GS: state.GS.GS,
    CS: state.CS.CS,
    SS: state.SS.SS,
  };
};
export default connect(mapStateToProps, mapActionsToProps)(EditDetails);
