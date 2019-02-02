import React from 'react'

export default class EmployeeAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="daily_back_button" onClick={() => this.props.backClick()}>
                    <i className="fas fa-arrow-alt-circle-left"></i>
                    Back
                </div>
                <h1>Availability</h1>
            </div>
        );
    }
}