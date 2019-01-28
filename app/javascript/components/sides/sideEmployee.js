import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class SideEmployee extends React.Component {

    render() {
        return (
            <SideNav.Nav>
                <NavItem eventKey="add-shift">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText onClick={() => this.props.back()}>
                        Back
                    </NavText>
                </NavItem>

                <NavItem>
                    <NavText>
                        Employee Info
                    </NavText>
                </NavItem>
                {this.props.employee &&
                    <ul>
                        Name <li>{this.props.employee.first_name} {this.props.employee.last_name} </li>
                        Email <li> {this.props.employee.email} </li>
                        Occupation <li> {this.props.employee.occupation} </li>
                        Phone Number <li> {this.props.employee.phone_number} </li>
                    </ul>
                }

                <NavItem>
                    <NavText>
                        Scheduled Shifts
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        )
    }
}
