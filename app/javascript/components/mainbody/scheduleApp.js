import React from 'react'
import Calendar from './scheduleCalendar'

export default class ScheduleApp extends React.Component {
    state = {
        employees: [],
        shifts: [],
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
            <div>
                <Calendar employees={this.state.employees} shifts={this.state.shifts} getDate={this.props.getDate} />
            </div>
        )
    }
}