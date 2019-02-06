import React from 'react'
import Calendar from './empScheduleCalendar'

export default class ScheduleApp extends React.Component {
    state = {
        employees: [],
        shifts: []
    }

    componentDidMount() {
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employees: data }) });

        fetch('/api/shifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ shifts: data }) });
    }

    render() {
        return(
<<<<<<< HEAD
            <div>
                <h2 className="employee-calendar-title">Welcome! Davey Junior</h2>
=======
            <div className="employee-schedule-container">
                <h2 className="employee-calendar-title">Welcome! Don Burks</h2>
>>>>>>> b69701c22ebd8db82e0d3de243b7e9df615c98ff
                <Calendar employees={this.state.employees} shifts={this.state.shifts} fetchDate={this.props.fetchDate} />
            </div>
        )
    }
}