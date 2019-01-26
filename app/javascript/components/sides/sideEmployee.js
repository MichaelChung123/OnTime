import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


export default class SideEmployee extends React.Component {

    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="add-shift">
                <h3>Employee</h3>
                <label>Name: </label>
                <textarea></textarea>
                <br />
                <label>Email:</label>
                <textarea></textarea>
                <hr></hr>

                <ul>
                    <li>Shift 1 9:00 AM - 5:00 PM Employee Name</li>
                    <li>Shift 2 9:00 AM - 5:00 PM Employee Name</li>
                    <li>Shift 3 9:00 AM - 5:00 PM Employee Name</li>
                    <li>Shift 4 9:00 AM - 5:00 PM Employee Name</li>
                    <li>Shift 5 9:00 AM - 5:00 PM Employee Name</li>
                    <li>Shift 6 9:00 AM - 5:00 PM Employee Name</li>
                </ul>
                    <NavItem eventKey="add-shift">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            + Add Shift2
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="add-employee">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            + Add Employee2
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

                </SideNav.Nav>
            </SideNav>
        )
    }
}
