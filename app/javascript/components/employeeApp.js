import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import Footer from './footer/footer'
import SideEmployee from './sides/sideEmployee'
import ScheduleApp from './mainbody/scheduleApp';
import MentorCalculator from './logistics/mentorcalculator'
import EmployeeSidebar from './sides/employeeSidebar'

export default class EmployeeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedDate: new Date(),
            employees: [],
            shifts: [],
            availabilities: []
        }

        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        fetch('/api/employeeshifts')
        .then((response) => { return response.json() })
        .then((data) => { this.setState({ employeeShifts: data }) });
    }

    getDate = (date) => {
        this.setState({
            clickedDate: date
        })
    }

    render() {


        return (
            <div>
                <NavBar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <ScheduleApp getDate={this.getDate} employees={this.state.employees} shifts={this.state.shifts} availabilities={this.state.availabilities} />
                <EmployeeSidebar />

            </div>
        )
    }
}


