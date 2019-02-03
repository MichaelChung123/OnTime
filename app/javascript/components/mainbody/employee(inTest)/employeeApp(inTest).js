import React from 'react'
import NavBar from '../../nav/navbar'
import ScheduleApp from '../scheduleApp';
import EmployeeSidebar from './employeeSidebar(inTest)'
import RequestButtons from './mainbody/employee/requestButtons'
import Request from './mainbody/employee/employeeRequest'
import Availability from './mainbody/employee/employeeAvailability'


export default class EmployeeApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            renderChild: false,
            clickedDate: new Date(),
            employees: [],
            shifts: [],
            availabilities: [],
        }

        this.getDate = this.getDate.bind(this);
        this.handleRequestOff = this.handleRequestOff.bind(this);
        this.handleAvailability = this.handleAvailability.bind(this);
    }

    componentDidMount() {
        fetch('/api/employeeshifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employeeShifts: data }) });

        fetch('/api/availability')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ availabilities: data }) });
    }

    getDate = (date) => {
        this.setState({
            clickedDate: date
        })
    }

    handleRequestOff() {
        this.setState({
            renderChild: "request"
        });
    }

    handleAvailability() {
        this.setState({
            renderChild: "availability"
        });
    }

    backClick = () => {
        this.setState({
            renderChild: false
        })
    }

    render() {

        let render = this.state.renderChild;

        if (render === "request") {
            return (
                <div>
                    <NavBar />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h2>Khurram Virani</h2>

                    <Request backClick={this.backClick}/>
                </div>);
        }

        if (render === "availability") {
            return (
                <div>
                    <NavBar />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h2>Khurram Virani</h2>

                    <Availability backClick={this.backClick} availabilities={this.state.availabilities}/>

                </div>
            );
        }

        return (
            <div>
                <NavBar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h2>Khurram Virani</h2>

                <ScheduleApp getDate={this.getDate} employees={this.state.employees} shifts={this.state.shifts} availabilities={this.state.availabilities} />
                <EmployeeSidebar />

                <RequestButtons handleRequestOff={this.handleRequestOff} handleAvailability={this.handleAvailability} />
            </div>
        );
    }
}


