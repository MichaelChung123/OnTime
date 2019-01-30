import React from 'react'
import Calendar from './scheduleCalendar'

export default class ScheduleApp extends React.Component {
    state = {
        employees: []
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
                <Calendar employees={this.state.employees}/>
                <hr/>
            </div>
        )
    }
}