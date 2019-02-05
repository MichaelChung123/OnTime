import React from 'react'
import NavBar from './empNav'
import ScheduleApp from './empScheduleApp'
import SideBar from './empSideBar'
import Request from './request'

export default class EmployeeApp extends React.Component {
    
    render() {
        return (
            <div>
                <SideBar shifts={this.props.shifts} currentDate={this.props.currentDate} />
                <NavBar fetchRequestTimeOff={this.props.fetchRequestTimeOff} availabilities={this.props.availabilities} /><br/><br/><br/><br/>
                <ScheduleApp fetchDate={this.props.fetchDate} />
                
            </div>
        )
    }
}