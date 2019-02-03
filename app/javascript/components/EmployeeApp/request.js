import React from 'react'
import TimeOffRequestForm from './requestForm/timeOffRequest'
import AvailForm from './requestForm/availForm.js'

export default class Request extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeOffForm: false,
            availForm: false
        }
    }
    
    
    requestTimeOff = () => {
        console.log(`timeoff`)
        this.setState({
            timeOffForm: !this.state.timeOffForm
        })
    };

    requestAvailability = () => {
        console.log(`availability`)
        this.setState({
            availForm: !this.state.availForm
        })
    }

    closeHandler = () => {
        this.setState({
            timeOffForm: !this.state.timeOffForm
        })
    }

    
    render() {
        return (
            <div>
                <div className="request-buttons-container">
                    <button onClick={() => this.requestTimeOff()}>Request Time Off</button>
                    <button onClick={() => this.requestAvailability()}>Request Availability</button>
                </div>
                {this.state.timeOffForm ? <TimeOffRequestForm closeHandler={this.closeHandler} fetchRequestTimeOff={this.props.fetchRequestTimeOff} /> : null}
                {/* {this.state.availForm ? <AvailForm /> : null} */}
            </div>
        )
    }
        
}