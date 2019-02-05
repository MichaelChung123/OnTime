import React from 'react'
import Request from './employeeRequest'
import Availability from './employeeAvailability'

export default class RequestButtons extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <button className="employee-request-time-off" onClick={this.props.handleRequestOff}>Request Time Off</button>
                <button className="employee-change-availability" onClick={this.props.handleAvailability}>Change Availability</button>
            </div>
        );
    }
}