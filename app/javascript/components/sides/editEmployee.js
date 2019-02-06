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
            phone: emp.phone_number,
            mounted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
    };

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
        
        alert('Updated Employee');

        this.props.refreshComponent(data);
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
                            <div className="col-md-3">
                                <div className={`edit-sidebar${this.state.mounted ? " enter" : ""}`}>

                                    <div className="addEmployeeForm">
                                    <form onSubmit={this.handleSubmit}>
                                        First name
                                        <input className="add_employee_input" type="text" name="fname" value={this.state.fname} onChange={this.handleChange} />

                                        Last name
                                        <input className="add_employee_input" type="text" name="lname" value={this.state.lname} onChange={this.handleChange} />

                                        Email
                                        <input className="add_employee_input" type="text" name="email" value={this.state.email} onChange={this.handleChange} />

                                        Occupation
                                        <input className="add_employee_input" type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} />

                                        Phone Number
                                        <input className="add_employee_input" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                        <input className="edit_employee_submit_button" type="submit" value="Submit" />
                                    </form>
                                    </div>
                                </div>
                            </div>
                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}