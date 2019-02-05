import React from 'react'
import TimeOffRequestForm from './requestForm/timeOffRequest'
import AvailForm from './requestForm/availForm'

export default class Request extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeOffForm: false,
            availForm: false
        }
    }


    requestTimeOff = () => {
        this.setState({
            timeOffForm: !this.state.timeOffForm
        })
    };

    requestAvailability = () => {
        this.setState({
            availForm: !this.state.availForm
        })
    }

    closeHandler = () => {
        this.setState({
            timeOffForm: !this.state.timeOffForm
        })
    }
    availCloseHandler = () => {
        this.setState({
            availForm: !this.state.availForm
        })
    }

    render() {
        return (
            <div className="request-buttons-container">
                <button className="request-time-off" onClick={() => this.requestTimeOff()}>Request Time Off</button>
                <button className="request-availability" onClick={() => this.requestAvailability()}>Request Availability</button>
                
                {this.state.timeOffForm ? <TimeOffRequestForm closeHandler={this.closeHandler} fetchRequestTimeOff={this.props.fetchRequestTimeOff} /> : null}
                {this.state.availForm ? <AvailForm  availabilities={this.props.availabilities} closeHandler={this.availCloseHandler} /> : null}
            </div>
        )
    }

}