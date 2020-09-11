import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from "reactstrap";
import { addCandidate } from "../redux/ActionCreators";
import { connect } from "react-redux";

class Candidature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      SchID: "",
      CPI: "",
      SPI: "",
      Hostel: "",
      Address: "",
      Branch: "",
      Post: "",
      TnC: false,
      CoC: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addCandidate = this.addCandidate.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: [e.target.value].toString(),
    });
    //console.log(this.state);
  };

  addCandidate = () => {
    const { Name, Post, SchID, CPI, SPI, Hostel, Address, Branch } = this.state;
    console.log(Name, Post, SchID, CPI, SPI, Address, Branch, Hostel);
    var count = 0;

    this.props.eth
      .addCandidate(Name, Post, SchID, CPI, SPI, Address, Branch, Hostel, {
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
          name: Name,
          voteCount: 0,
          schID: SchID,
          cpi: CPI,
          spi: SPI,
          address: Address,
          branch: Branch,
          hostel: Hostel,
        };
        this.props.addCandidate(Post, CD);
      });
  };

  render() {
    return (
      <Container className="mt-2">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(this.state);
            this.addCandidate();
          }}
        >
          <FormGroup row>
            <Label for="Name" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="NameBox"
                id="Name"
                placeholder="Enter your Full Name"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="SchID" sm={2}>
              Scholar ID
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="SchIDBox"
                id="SchID"
                placeholder="Enter your Scholar ID"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Post" sm={2}>
              Post
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="PostBox"
                id="Post"
                placeholder="Enter the Post you want to compete in"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="CPI" sm={2}>
              CPI
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="CPIBox"
                id="CPI"
                placeholder="Enter your current CPI"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="SPI" sm={2}>
              SPI
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="SPIBox"
                id="SPI"
                placeholder="Enter your last SPI"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Address" sm={2}>
              Address
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="AddressBox"
                id="Address"
                placeholder="Enter your Permanent Address"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Branch" sm={2}>
              Branch
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="BranchBox"
                id="Branch"
                placeholder="Enter the name of your Branch"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Hostel" sm={2}>
              Hostel No.
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="HostelBox"
                id="Hostel"
                placeholder="Enter your Hostel No."
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col></Col>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Input
                  type="checkbox"
                  id="TnC"
                  id="checkbox2"
                  checked={this.state.TnC}
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      TnC: e.target.checked,
                    });
                  }}
                />
                <Label check>
                  Agree to the <span>Terms and Conditions</span>
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col></Col>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Input
                  type="checkbox"
                  id="CoC"
                  id="checkbox2"
                  checked={this.state.CoC}
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      CoC: e.target.checked,
                    });
                  }}
                />
                <Label check>
                  Agree to the <span>Code of Conduct</span>
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button disabled={!this.state.TnC || !this.state.CoC}>
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

const mapActionsToProps = {
  addCandidate,
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
export default connect(mapStateToProps, mapActionsToProps)(Candidature);
