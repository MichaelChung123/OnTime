import React from 'react'
import NavBar from '../nav/navbar'
import ScheduleApp from './empScheduleApp'
import SideBar from './empSideBar'
export default class EmployeeApp extends React.Component {
    
    

    render() {
        return (
            <div>
                <SideBar shifts={this.props.shifts} currentDate={this.props.currentDate} />
                <NavBar /><br/><br/><br/><br/>
                <ScheduleApp fetchDate={this.props.fetchDate} />
            </div>
        )
    }
}