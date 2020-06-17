import React, { Component, Fragment, useState } from "react";
import { connect } from "react-redux";

// import "@fortawesome/fontawesome-free/css";
import EditCandidates from "./EditCandidates";

class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0xb28d00609a993f5b2ba66d8e081d7f4dee3298f5",
    };
  }

  render() {
    // console.log(this.props.account);
    // console.log(this.state.account);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-2">
            {this.props.account === this.state.account ? (
              <EditCandidates account={this.props.account} />
            ) : (
              <h1>You are not authorized to edit the details</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    VP: state.VP.VP,
    GS: state.GS.GS,
    CS: state.CS.CS,
    SS: state.SS.SS,
  };
};
export default connect(mapStateToProps)(EditDetails);
