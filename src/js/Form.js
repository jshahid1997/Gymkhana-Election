import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }
  // componentWillReceiveProps() {
  //   console.log(this.props.candidates);
  //   // this.setState({ value: this.props.candidates[0].id.toNumber() });
  // }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
    this.props.addId(event.target.value);
  }

  render() {
    return (
      <form className="mt-5 mb-5">
        <div class="form-group">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h4 className="text-left">Select Candidate :</h4>
              </div>
              <div className="col-8">
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  class="form-control"
                >
                  <option selected value={0}>
                    None
                  </option>
                  {this.props.candidates.map((candidate) => {
                    return (
                      <option value={candidate.id}>{candidate.name}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
