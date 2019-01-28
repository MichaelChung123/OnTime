import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SideEmployee from './sideEmployee'
import Popup from './popup'
// import ReactTransitionGroup from 'react-addons-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            shifts: [],
            // state property to show info. toggle on and off
            showInfo: false,
            clicked: false,

        };

        this.addShiftHandleClick = this.addShiftHandleClick.bind(this);

        // bind function in order to use "this" in the function
        this.selectEmployee = this.selectEmployee.bind(this);

        this.back = this.back.bind(this);
    }

    componentDidMount() {
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employees: data }) });
    }

    // function created to call in onClick
    selectEmployee(employee) {
        this.setState({
            showInfo: true,
            employee: employee
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
            // Use () => in order to use a function to call selectEmployee function or else it will call automatically
            return <li onClick={() => this.selectEmployee(e)} key={index + 1} >{e.first_name}  {e.last_name}</li>
        })


        return (
            <SideNav
                onSelect={(selected) => {

                }}
            >
                <SideNav.Toggle />
                {/* if showInfo is false, then show the following code */}
                {
                    !this.state.showInfo &&
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
                        <NavItem>
                            <NavIcon>

                            </NavIcon>
                            <NavText>
                                {employees}
                            </NavText>
                        </NavItem>

                    </SideNav.Nav>
                }

                {this.state.showInfo &&
                    <SideEmployee employee={this.state.employee} back={this.back} />
                }
            </SideNav>
        )
    }
}
