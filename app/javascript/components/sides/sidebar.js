import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SideEmployee from './sideEmployee'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Transition } from 'react-transition-group';
import Popup from './popup'
import AddEmployee from './addEmployee'


export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            shifts: [],
            renderChild: false,
            clicked: false,
            expanded: false,
            refresh: false,
            selectedEmployee: null
        };

        this.selectEmployee = this.selectEmployee.bind(this);
        this.back = this.back.bind(this);
        this.addShiftHandleClick = this.addShiftHandleClick.bind(this);
        this.getEmpShift = this.getEmpShift.bind(this);
        this.refreshComponent = this.refreshComponent.bind(this);
    }

    getEmpShift() {
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employees: data }) });

        fetch('/api/shifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ shifts: data }) });
    }

    refreshComponent(data){
        
        var employee = {
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            occupation: data.occupation,
            phone_number: data.phone_number
        };
        
        this.setState({
            renderChild: "employee",
            employee: employee
        });
    }

    componentDidMount() {
       
        this.getEmpShift();
    }

    selectEmployee(employee) {
        this.setState({
            renderChild: "employee",
            employee: employee,
        });
    }

    back() {
        this.setState({
            renderChild: false
        });
        this.getEmpShift();

    }

    addShiftHandleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    };

    addEmployee() {
        this.setState({
            renderChild: "addEmployee"
        });
    }


    render() {
        let employees = this.state.employees.map((e, index) => {
            return (
                <NavItem key={index + 1}>
                    <NavIcon>

                    </NavIcon>
                    <NavText>
                        <li onClick={() => this.selectEmployee(e)}>{e.first_name}  {e.last_name}</li>
                    </NavText>
                </NavItem>
            );
        })

        const shifts = this.state.shifts;

        const render = this.state.renderChild;

        if (render === "employee") {
            return (
                <SideEmployee refreshComponent={this.refreshComponent} getEmpShift={this.getEmpShift} shifts={shifts} employee={this.state.employee} back={this.back} />
            );
        }

        if (render === "addEmployee") {
            return (
                <AddEmployee refreshComponent={this.refreshComponent} getEmpShift={this.getEmpShift} back={this.back} />
            );
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
                        {/* <NavItem eventKey="add-shift" onClick={() => this.addShiftHandleClick()}>
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
                        </ReactCSSTransitionGroup> */}

                        <NavItem eventKey="add-employee">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText onClick={() => this.addEmployee()}>
                                + Add Employee
                            </NavText>
                        </NavItem>
                        <NavItem>
                            <NavIcon>

                            </NavIcon>
                            <NavText>
                                <div className="employees-title">
                                <i className="fas fa-users"></i>

                                    <div className="employee-text">Employees</div>
                                </div>
                            </NavText>
                        </NavItem>
                        {employees}
                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}
