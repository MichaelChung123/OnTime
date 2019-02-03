import React from 'react'

export default class EmployeeRequests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleChange = () => {
        
    }

    handleSubmit = () => {
        this.setState({
            x: "1"
        });
    }

    render() {
        return (
            <div>
                <div className="daily_back_button" onClick={() => this.props.backClick()}>
                    <i className="fas fa-arrow-alt-circle-left"></i>
                    Back
                </div>
                <h1>Requests</h1>
                <form onSubmit={this.handleSubmit}>
                    Reason
                    <select name="reasons">
                        <option value="timeOff">Off Request</option>
                        <option value="sick">Sick Day</option>
                        <option value="vacation">Vacation</option>
                        <option value="family">Family Emergency</option>
                    </select>

                    Day
                    <select name="day">
                        <option value="day1">Day 1</option>
                        <option value="day2">Day 2</option>
                        <option value="day3">Day 3</option>
                    </select>

                    <input className="edit_employee_submit_button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}