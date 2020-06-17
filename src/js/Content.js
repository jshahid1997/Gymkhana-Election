import React from "react";
import Table from "./Table";
import Form from "./Form";
import { connect } from "react-redux";

import { voteCS, voteGS, voteSS, voteVP } from "../redux/ActionCreators";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
    event.preventDefault();
    const ids = [];
    this.props.votes.VP == 0 ? null : ids.push(this.props.votes.VP);
    this.props.votes.GS == 0 ? null : ids.push(this.props.votes.GS);
    this.props.votes.CS == 0 ? null : ids.push(this.props.votes.CS);
    this.props.votes.SS == 0 ? null : ids.push(this.props.votes.SS);
    // console.log(ids);
    this.props.castVote(ids);
  };
  render() {
    return (
      <div className="mb-9">
        <Table candidates={this.props.VP} post="VP" />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.VP}
            addId={(id) => {
              this.props.voteVP(id);
            }}
          />
        ) : null}
        <Table candidates={this.props.GS} post="GS" />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.GS}
            addId={(id) => {
              this.props.voteGS(id);
            }}
          />
        ) : null}
        <Table candidates={this.props.CS} post="CS" />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.CS}
            addId={(id) => {
              this.props.voteCS(id);
            }}
          />
        ) : null}
        <Table candidates={this.props.SS} post="SS" />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.SS}
            addId={(id) => {
              this.props.voteSS(id);
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

const mapActionsToProps = { voteCS, voteGS, voteSS, voteVP };

const mapStateToProps = (state) => {
  return {
    VP: state.VP.VP,
    GS: state.GS.GS,
    CS: state.CS.CS,
    SS: state.SS.SS,
    votes: state.Votes.votes,
  };
};
export default connect(mapStateToProps, mapActionsToProps)(Content);
