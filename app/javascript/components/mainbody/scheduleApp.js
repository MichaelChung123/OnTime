import React from 'react'
import Calendar from './scheduleCalendar'

export default class ScheduleApp extends React.Component {
    state = {
        employeeShifts: []
    }
    
    componentDidMount() {
        fetch('/api/employeeshifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employeeShifts: data }) });
    }
    
    render() {
        return(
            <div>
                <Calendar employeeShifts={this.state.employeeShifts} getDate={this.props.getDate}/>

            </div>
        )
    }
}