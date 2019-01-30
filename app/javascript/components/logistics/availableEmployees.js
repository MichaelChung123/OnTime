import React from 'react';

export default class MentorCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            shifts: [],
            showInfo: false,
            clicked: false,
            expanded: true
        };
    }

    componentDidMount() {
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employees: data }) });

    }

    render() {
        let employees = this.state.employees.map((e, index) => {
            return (
                <div className={index + 1}>
                    <div>

                    </div>
                    <div>
                        <li onClick={() => this.selectEmployee(e)}>{e.first_name}  {e.last_name}</li>
                    </div>
                </div>
            )
        }
    }
}
