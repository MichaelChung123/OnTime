import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class AddEmployee extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            expanded: true,
            renderChild: false,
            user_id: 1,
            fname: "test",
            lname: "",
            email: "",
            occupation: "",
            phone: ""
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
            first_name: this.state.fname,
            last_name: this.state.lname,
            email: this.state.email,
            occupation: this.state.occupation,
            phone_number: this.state.phone
        }

        alert('Added Employee: ' + data.first_name + " " + data.last_name);

        fetch('/api/employees', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    render() {

        const render = this.state.renderChild;

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
                                <i class="fas fa-arrow-alt-circle-left"></i>
                            </NavIcon>
                            <NavText onClick={() => this.props.back()}>
                                Back
                        </NavText>
                        </NavItem>

                        <div className="container">
                            <div className="col-md-3">
                                <div className="edit-sidebar">

                                    <div className="addEmployeeForm">
                                    <form onSubmit={this.handleSubmit}>
                                        First name
                                        <input className="add_employee_input" type="text" name="fname" onChange={this.handleChange} />

                                        Last name
                                        <input className="add_employee_input" type="text" name="lname" onChange={this.handleChange} />

                                        Email
                                        <input className="add_employee_input" type="text" name="email" onChange={this.handleChange} />

                                        Occupation
                                        <input className="add_employee_input" type="text" name="occupation" onChange={this.handleChange} />

                                        Phone Number
                                        <input className="add_employee_input" type="text" name="phone" onChange={this.handleChange} />
                                        <input className="edit_employee_submit_button" type="submit" value="Submit" onSubmit={this.handleSubmit} />
                                    </form>
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