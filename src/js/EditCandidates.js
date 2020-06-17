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
    this.state = {
      isOpen: false,
      name: "",
      post: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.addCandidate = this.addCandidate.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  toggleModal = (e) => {
    this.setState({
      isOpen: !this.state.isOpen,
      post: e,
    });
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  addCandidate = () => {
    const { name, post } = this.state;
    console.log(name, post);
    var count = 0;

    this.props.eth
      .addCandidate(name, post, {
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
    return (
      <Fragment>
        <h1>Edit Candidates</h1>
        <h2>VP</h2>
        <Candidates
          candidates={this.props.VP}
          handleClick={this.handleClick}
          post={"VP"}
        />
        <Card>
          <Button
            className="text-center"
            onClick={() => this.toggleModal("VP")}
          >
            Add Candidate
          </Button>
        </Card>
        <h2>GS</h2>
        <Candidates
          candidates={this.props.GS}
          handleClick={this.handleClick}
          post={"GS"}
        />
        <Card>
          <Button
            className="text-center"
            onClick={() => this.toggleModal("GS")}
          >
            Add Candidate
          </Button>
        </Card>
        <h2>CS</h2>
        <Candidates
          candidates={this.props.CS}
          handleClick={this.handleClick}
          post={"CS"}
        />
        <Card>
          <Button
            className="text-center"
            onClick={() => this.toggleModal("CS")}
          >
            Add Candidate
          </Button>
        </Card>
        <h2>SS</h2>
        <Candidates
          candidates={this.props.SS}
          handleClick={this.handleClick}
          post={"SS"}
        />
        <Card>
          <Button
            className="text-center"
            onClick={() => this.toggleModal("SS")}
          >
            Add Candidate
          </Button>
        </Card>
        <Modal isOpen={this.state.isOpen} toggle={() => this.toggleModal("")}>
          <ModalHeader toggle={() => this.toggleModal("")}>
            Add Candidates
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label sm={4}>Candidate name </Label>

                <Col sm={8}>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.addCandidate();
                this.toggleModal("");
              }}
            >
              Add Candidate
            </Button>{" "}
            <Button color="secondary" onClick={() => this.toggleModal("")}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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
