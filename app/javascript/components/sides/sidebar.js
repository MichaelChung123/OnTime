import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SideEmployee from './sideEmployee'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { Transition } from 'react-transition-group';
import Popup from './popup'


export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            shifts: [],
            showInfo: false,
            clicked: false
        };


        this.selectEmployee = this.selectEmployee.bind(this);
        this.back = this.back.bind(this);
        this.addShiftHandleClick = this.addShiftHandleClick.bind(this);
    }

    componentDidMount() {
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employees: data }) });

        fetch('/api/shifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ shifts: data }) });
    }

    selectEmployee(employee) {
        this.setState({
            showInfo: true,
            employee: employee,
        });
    }

    back() {
        this.setState({
            showInfo: false
        });

    }

    addShiftHandleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    };

    render() {
        let employees = this.state.employees.map((e, index) => {
            return (
                <NavItem key={index + 1}>
                    <NavText>
                        <li onClick={() => this.selectEmployee(e)}>{e.first_name}  {e.last_name}</li>
                    </NavText>
                </NavItem>
            );
        })

        const shifts = this.state.shifts;

        return (

            <SideNav
                onSelect={(selected) => {

                }}
            >
                <SideNav.Toggle />
                {!this.state.showInfo &&
                    <SideNav.Nav>
                        <NavItem eventKey="add-shift" onClick={() => this.addShiftHandleClick()}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                + Add Shift
                        </NavText>
                        </NavItem>

                        <ReactCSSTransitionGroup
                            transitionName="popup_css"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                        >
                            {this.state.clicked ? <Popup closePopup={this.addShiftHandleClick} listOfEmployees={this.state.employees} /> : null}
                        </ReactCSSTransitionGroup>

                        <NavItem eventKey="add-employee">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                + Add Employee
                        </NavText>
                            <NavItem eventKey="employee/subitem1">
                                <NavText>
                                    Test Sub Item 1
                            </NavText>
                            </NavItem>
                            <NavItem eventKey="employee/subitem2">
                                <NavText>
                                    Test Sub Item 2
                            </NavText>
                            </NavItem>
                        </NavItem>

                        {employees}

                    </SideNav.Nav>
                }
                {this.state.showInfo &&
                    <SideEmployee shifts={shifts} employee={this.state.employee} back={this.back} />
                }
            </SideNav>
        )
    }
}
