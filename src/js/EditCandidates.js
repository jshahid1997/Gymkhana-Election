import React, { Fragment, Component } from "react";
import Candidates from "./Candidates";
import {
  Card,
  Button,
  Modal,
  Form,
  FormGroup,
  ModalFooter,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  Col,
  Row,
} from "reactstrap";

import { addCandidate, deleteCandidate } from "../redux/ActionCreators";

import { connect } from "react-redux";

class EditCandidates extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  // console.log(props.props);
  handleClick = (cd, post) => {
    console.log(cd, post);
    this.props.eth
      .removeCandidate(cd.name, post, { from: this.props.account })
      .then((res) => {
        console.log(res);
        this.props.deleteCandidate(post, cd);
      });
  };

  render() {
    return (
      <Fragment>
        <h1>Edit Candidates</h1>
        <h2>VP</h2>
        <Candidates
          candidates={this.props.VP}
          handleClick={this.handleClick}
          post={"VP"}
        />

        <h2>GS</h2>
        <Candidates
          candidates={this.props.GS}
          handleClick={this.handleClick}
          post={"GS"}
        />

        <h2>CS</h2>
        <Candidates
          candidates={this.props.CS}
          handleClick={this.handleClick}
          post={"CS"}
        />

        <h2>SS</h2>
        <Candidates
          candidates={this.props.SS}
          handleClick={this.handleClick}
          post={"SS"}
        />
      </Fragment>
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
    eth: state.ElectionInstance.instance,
  };
};
export default connect(mapStateToProps, mapActionsToProps)(EditCandidates);
