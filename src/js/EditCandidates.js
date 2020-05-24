import React, { Fragment } from "react";
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
const EditCandidates = (props) => {
  // console.log(props.props);
  return (
    <Fragment>
      <h1>Edit Candidates</h1>
      <h2>VP</h2>
      <Candidates
        candidates={props.props.VP}
        handleClick={props.handleClick}
        post={"VP"}
        isOpen={props.isOpen}
        toggle={props.toggle}
        onChange={props.onChange}
        addCandidate={props.addCandidate}
      />
      <Card>
        <Button className="text-center" onClick={() => props.toggle("VP")}>
          Add Candidate
        </Button>
      </Card>
      <h2>GS</h2>
      <Candidates
        candidates={props.props.GS}
        handleClick={props.handleClick}
        post={"GS"}
        isOpen={props.isOpen}
        toggle={props.toggle}
        onChange={props.onChange}
        addCandidate={props.addCandidate}
      />
      <Card>
        <Button className="text-center" onClick={() => props.toggle("GS")}>
          Add Candidate
        </Button>
      </Card>
      <h2>CS</h2>
      <Candidates
        candidates={props.props.CS}
        handleClick={props.handleClick}
        post={"CS"}
        isOpen={props.isOpen}
        toggle={props.toggle}
        onChange={props.onChange}
        addCandidate={props.addCandidate}
      />
      <Card>
        <Button className="text-center" onClick={() => props.toggle("CS")}>
          Add Candidate
        </Button>
      </Card>
      <h2>SS</h2>
      <Candidates
        candidates={props.props.SS}
        handleClick={props.handleClick}
        post={"SS"}
        isOpen={props.isOpen}
        toggle={props.toggle}
        onChange={props.onChange}
        addCandidate={props.addCandidate}
      />
      <Card>
        <Button className="text-center" onClick={() => props.toggle("SS")}>
          Add Candidate
        </Button>
      </Card>
      <Modal isOpen={props.isOpen} toggle={() => props.toggle("")}>
        <ModalHeader toggle={() => props.toggle("")}>
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
                  onChange={props.onChange}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.addCandidate();
              props.toggle();
            }}
          >
            Add Candidate
          </Button>{" "}
          <Button color="secondary" onClick={() => props.toggle("")}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default EditCandidates;
