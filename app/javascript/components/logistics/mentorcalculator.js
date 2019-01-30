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
    alert('You need ' + this.state.value/7 + ' mentors!');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="student-input">
          Number of Students:
            <input type="number" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <div className="mentor-number">You need {Math.round(this.state.value/7)} mentors</div>
      </form>
      )
  }
}


