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
      <form>
        <div class="form-group">
          <label>Select Candidate</label>
          <select
            value={this.state.value}
            onChange={this.handleChange}
            class="form-control"
          >
            <option selected value={0}>
              None
            </option>
            {this.props.candidates.map((candidate) => {
              return <option value={candidate.id}>{candidate.name}</option>;
            })}
          </select>
        </div>

        <hr />
      </form>
    );
  }
}

export default Form;
