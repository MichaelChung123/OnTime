import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class EmployeeSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            employees: [],
            shifts: [],
            availabilities: [],
            loadedEmployees: false
        };
    }

    getEmpShift() {
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employees: data, loadedEmployees: true }) });

        fetch('/api/shifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ shifts: data }) });

        fetch('/api/availability')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ availabilities: data }) });
    }

    componentDidMount() {
        this.getEmpShift();
    }

    timeFormat(time) {
        if (time > 12) {
            time -= 12;
            time = time + ":00 PM";
        } else {
            time = time + ":00 AM";
        }

        return time;
    }

    render() {
        if (!this.state.loadedEmployees) return <div>Loading</div>
        if (this.state.loadedEmployees) {
            var shifts = this.state.shifts.map((e, index) => {
                if (this.state.employees[0].id === e.id) {
                    return (
                        <NavItem key={index + 1}>
                            <NavIcon>

                            </NavIcon>
                            <NavText>
                                <li>{e.day} at {this.timeFormat(e.start_time)} to {this.timeFormat(e.end_time)}</li>
                            </NavText>
                        </NavItem>
                    );
                }
            });
        }

        return (
            <div>
                <SideNav expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({ expanded: !this.state.expanded });
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav>
                        <NavItem>
                            <NavIcon>

                            </NavIcon>
                            <NavText>
                                <div className="employees-title">
                                    <i className="fas fa-users"></i>

                                    <div className="employee-text">Shifts</div>
                                </div>
                            </NavText>
                        </NavItem>
                        {shifts}
                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}
