import React from "react";
import { Card, CardHeader, Button } from "reactstrap";

const Candidates = (props) => {
  return (
    <Card>
      {props.candidates.map((candidate) => (
        <CardHeader className="text-left">
          <div className="container">
            <div className="row">
              <h4 className="col-6">{candidate.name}</h4>
              <div className="col-6 text-right">
                <Button
                  outline
                  color="secondary"
                  onClick={() => props.handleClick(candidate.name, props.post)}
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
};

export default Candidates;
