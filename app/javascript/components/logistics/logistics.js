import React from 'react';

export default class Logistics extends React.Component {
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
    let totalHours = 0;
    const currentDayShifts = this.props.shifts.filter((shift) => { if (shift.day == this.props.currentDate) return shift} );
    currentDayShifts.forEach((shift) => { totalHours += shift.duration});

    return (
      <div className="mentor-calculator-form">
        <form onSubmit={this.handleSubmit}>
          <div className="student-input">
            Number of students today:
              <input className="mentor-calculator-input" type="number" value={this.state.value} onChange={this.handleChange}></input>
                  
                  <label className="mentor-number"> {Math.round(this.state.value / 7)}</label>
                  <label className="mentors-needed">Mentors are needed</label>
                  <label>Total Hours scheduled for this day : {totalHours} </label>
          </div>


        </form>
      </div>
      )
  }
}


