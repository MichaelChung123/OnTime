import React from 'react';

export default class MentorCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value});
  }

  handleSubmit(event) {
    alert(`${this.state.value / 7}  mentors need to be scheduled`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="student-input">
          Number of Students on this day
            <input type="number" value={this.state.value} onChange={this.handleChange}></input>
        </label><br/>
        <label className="mentor-number">{Math.round(this.state.value / 7)} Mentors are needed</label>
      </form>
      )
  }
}


