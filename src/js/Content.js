import React from "react";
import Table from "./Table";
import Form from "./Form";

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
    return (
      <div>
        <Table candidates={this.props.VP} />
        <hr />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.VP}
            addId={(id) => {
              this.setState({ ...this.state, VP: id });
            }}
          />
        ) : null}
        <Table candidates={this.props.GS} />
        <hr />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.GS}
            addId={(id) => {
              this.setState({ ...this.state, GS: id });
            }}
          />
        ) : null}
        <Table candidates={this.props.CS} />
        <hr />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.CS}
            addId={(id) => {
              this.setState({ ...this.state, CS: id });
            }}
          />
        ) : null}
        <Table candidates={this.props.SS} />
        <hr />
        {!this.props.hasVoted ? (
          <Form
            candidates={this.props.SS}
            addId={(id) => {
              this.setState({ ...this.state, SS: id });
            }}
          />
        ) : null}
        <button onClick={this.handleClick} class="btn btn-primary">
          Vote
        </button>
        <p>Your account: {this.props.account}</p>
      </div>
    );
  }
}

export default Content;
