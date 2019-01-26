import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


export default class SideBar extends React.Component {
    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="add-shift">
                    <NavItem eventKey="add-shift">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            + Add Shift
                        </NavText>
                    </NavItem>
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

                </SideNav.Nav>
            </SideNav>
        )
    }
}
