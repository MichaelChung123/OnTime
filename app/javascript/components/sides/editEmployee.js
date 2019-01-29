import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class EditEmployee extends React.Component {
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
                                <div className="editEmployeeForm">
                                    <form action="/action_page.php" id="form1">
                                        First name: <input type="text" name="fname" /><br />
                                        Last name: <input type="text" name="lname" /><br />
                                        Email: <input type="text" name="email" /><br />
                                        Occupation: <input type="text" name="occupation" /><br />
                                        Phone Number: <input type="text" name="phone" /><br />
                                        <input type="submit" value="Submit" />
                                    </form>
                                </div>
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
                );
            }
}