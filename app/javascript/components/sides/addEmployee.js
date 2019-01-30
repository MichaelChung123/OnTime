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
                                        First name: <input type="text" name="fname" onChange={this.handleChange} /><br />
                                        Last name: <input type="text" name="lname" onChange={this.handleChange} /><br />
                                        Email: <input type="text" name="email" onChange={this.handleChange} /><br />
                                        Occupation: <input type="text" name="occupation" onChange={this.handleChange} /><br />
                                        Phone Number: <input type="text" name="phone" onChange={this.handleChange} /><br />
                                        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
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