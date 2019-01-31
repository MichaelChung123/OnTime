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

        alert('Updated Employee: ' + this.props.first_name + " " + this.props.last_name);
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

                        <div className="daily_back_button" onClick={() => this.props.backClick()}>
                            <i class="fas fa-arrow-alt-circle-left"></i>
                            Back
                        </div>
                        </NavItem>


                        <NavItem eventKey="add-employee">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <div className="editEmployeeForm">
                                    <form className="editEmployeeForm" onSubmit={this.handleSubmit}>
                                        First name:
                                        <input className="edit_employee_input" type="text" name="fname" value={this.state.fname} onChange={this.handleChange} />

                                        Last name:
                                        <input className="edit_employee_input" type="text" name="lname" value={this.state.lname} onChange={this.handleChange} />

                                        Email:
                                        <input className="edit_employee_input" type="text" name="email" value={this.state.email} onChange={this.handleChange} />

                                        Occupation:
                                        <input className="edit_employee_input" type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} />

                                        Phone Number:
                                        <input className="edit_employee_input" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />

                                        <br></br>
                                        <input className="edit_employee_submit_button" type="submit" value="Submit" />
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