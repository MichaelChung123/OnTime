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
                                <i className="fas fa-arrow-alt-circle-left"></i>
                            </NavIcon>
                            <NavText onClick={() => this.props.back()}>
                                Back
                        </NavText>
                        </NavItem>

                        <div className="container">
                            <div className="col-md-3">
                                <div className="contact-sidebar">

                                    <div className="profile-contacts">
                                        <div className="contact-title">

                                            {this.props.employee.first_name} {this.props.employee.last_name}
                                        </div>
                                        <div className="contact-phone-title">
                                            <i className="fas fa-phone-square"></i>
                                            <div className="phone-number-text">Phone number</div>
                                        </div>
                                        <div className="contact-phone">
                                            {this.props.employee.phone_number}
                                        </div>
                                        <div className="contact-phone-title">
                                            <i className="fas fa-envelope-square"></i>
                                            <div className="phone-number-text">Email</div>
                                        </div>
                                        <div className="contact-phone">
                                            {this.props.employee.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SideNav.Nav>
                </SideNav>
            </div>
                );
            }
}