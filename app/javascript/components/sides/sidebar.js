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
            // state property to show info. toggle on and off
            showInfo: false,
            clicked: false
        };


        // bind function in order to use "this" in the function
        this.selectEmployee = this.selectEmployee.bind(this);
        this.back = this.back.bind(this);
        this.addShiftHandleClick = this.addShiftHandleClick.bind(this);
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
            // <Transition timeout={400} in={true} appear>
            //     {(status) => (
            //         <ul className={`box box-${status}`}>
            //             <li>one</li>
            //             <li>two</li>
            //             <li>three</li>
            //             <li>four</li>
            //         </ul>
            //     )}
            // </Transition>

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
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} onSelect={("add-employee", event)} />
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
