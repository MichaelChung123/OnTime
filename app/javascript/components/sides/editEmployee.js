import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class EditEmployee extends React.Component {
    constructor(props) {
        super(props)

        const emp = this.props.employee;

        this.state = {
            expanded: true,
            user_id: 1,
            fname: emp.first_name,
            lname: emp.last_name,
            email: emp.email,
            occupation: emp.occupation,
            phone: emp.phone_number
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        if (name === "fname") {
            this.setState({ fname: value });
        } else if (name === "lname") {
            this.setState({ lname: value });
        } else if (name === "email") {
            this.setState({ email: value });
        } else if (name === "occupation") {
            this.setState({ occupation: value });
        } else if (name === "phone") {
            this.setState({ phone: value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let data = {
            //user_id is hard coded to 1 since demo is only meant for one admin user
            user_id: this.state.user_id,
            id: this.props.employee.id,
            first_name: this.state.fname,
            last_name: this.state.lname,
            email: this.state.email,
            occupation: this.state.occupation,
            phone_number: this.state.phone
        }

        fetch('/api/employees', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        this.props.setEmployee(data);

        alert('Updated Employee');
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
                                    <form onSubmit={this.handleSubmit}>
                                        First name: <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} /><br />
                                        Last name: <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} /><br />
                                        Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br />
                                        Occupation: <input type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} /><br />
                                        Phone Number: <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} /><br />
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