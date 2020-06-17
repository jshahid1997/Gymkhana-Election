import React, { Component } from "react";
import { Card, CardHeader, Button } from "reactstrap";

class Candidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "VP",
    };
  }
  componentDidMount() {
    this.setState({ post: this.props.post });
  }
  render() {
    return (
      <Card>
        {this.props.candidates.map((candidate) => (
          <CardHeader className="text-left">
            <div className="container">
              <div className="row">
                <h4 className="col-6">{candidate.name}</h4>
                <div className="col-6 text-right">
                  <Button
                    outline
                    color="secondary"
                    onClick={() =>
                      this.props.handleClick(candidate, this.state.post)
                    }
                    id="delete"
                  >
                    <i className="fas fa-times-circle fa-lg"></i>
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
        ))}
      </Card>
    );
  }
}

export default Candidates;
