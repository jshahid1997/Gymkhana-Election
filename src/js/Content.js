import React from "react";
import Table from "./Table";
import Form from "./Form";
import { connect } from "react-redux";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      VP: 0,
      GS: 0,
      CS: 0,
      SS: 0,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    const ids = [];
    this.state.VP == 0 ? null : ids.push(this.state.VP);
    this.state.GS == 0 ? null : ids.push(this.state.GS);
    this.state.CS == 0 ? null : ids.push(this.state.CS);
    this.state.SS == 0 ? null : ids.push(this.state.SS);
    console.log(ids);
    this.props.castVote(ids);
  };
  render() {
    console.log(this.props.VP);
    return (
      <div className="mb-9">
        <Table candidates={this.props.VP} post="VP" />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.VP}
            addId={(id) => {
              this.setState({ ...this.state, VP: id });
            }}
          />
        ) : null}
        <Table candidates={this.props.GS} post="GS" />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.GS}
            addId={(id) => {
              this.setState({ ...this.state, GS: id });
            }}
          />
        ) : null}
        <Table candidates={this.props.CS} post="CS" />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.CS}
            addId={(id) => {
              this.setState({ ...this.state, CS: id });
            }}
          />
        ) : null}
        <Table candidates={this.props.SS} post="SS" />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.SS}
            addId={(id) => {
              this.setState({ ...this.state, SS: id });
            }}
          />
        ) : null}
        {!this.props.hasVoted ? (
          <button onClick={this.handleClick} class="btn btn-primary m-7">
            Vote
          </button>
        ) : null}
        {/* <p>Your account: {this.props.account}</p> */}
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
export default connect(mapStateToProps)(Content);
