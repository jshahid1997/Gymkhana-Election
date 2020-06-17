import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

class Table extends React.Component {
  render() {
    return (
      <Card className="mt-3 mb-3">
        <CardHeader>
          <div className="container">
            <div className="row">
              <div className="col-4">Name</div>
              <div className="col-4">Post</div>
              <div className="col-4">Votes</div>
            </div>
          </div>
        </CardHeader>
        {this.props.candidates.map((candidate) => {
          return (
            <CardBody>
              <div className="container">
                <div className="row">
                  <div className="col-4">{candidate.name}</div>
                  <div className="col-4">{this.props.post}</div>
                  <div className="col-4">{candidate.voteCount}</div>
                </div>
              </div>
            </CardBody>
          );
        })}
      </Card>
    );
  }
}

export default Table;
