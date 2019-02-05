import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class EmployeeSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            employees: [],
            shifts: [],
            availabilities: []
        };
    }

    getEmpShift() {
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employees: data }) });

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
        // this component has an issue with fetching the data multiple times but returns undefined the first time
        // which makes accessing their keys impossible. Created a conditional to make sure that there is data in
        // data fetch before mapping through it and using another conditional to successfully access it's key. 
        // assigning it to var instead of let to allow access to it in the jsx render call below
        if (this.state.shifts.length > 0) {
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
