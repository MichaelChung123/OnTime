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
                <button onClick={this.props.handleRequestOff}>Request Time Off</button>
                <button onClick={this.props.handleAvailability}>Change Availability</button>
            </div>
        );
    }
}