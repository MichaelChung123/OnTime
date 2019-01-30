import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: true
        }
    }

    render() {
        return (
            <div>
                <SideNav expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({ expanded: !this.state.expanded });
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav>
                        <NavItem eventKey="add-shift">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText onClick={() => this.props.back()}>
                                Back
                        </NavText>
                        </NavItem>
                        <NavItem eventKey="add-employee">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <h1>Contact</h1>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="add-employee">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <h3>Phone: {this.props.employee.phone_number}</h3>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="add-employee">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <h3>Email: {this.props.employee.email}</h3>
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
                );
            }
}