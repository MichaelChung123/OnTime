import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Notifications extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    acceptRequest = (id) => {
        console.log(id)
        fetch('/api/timeoffrequest', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id)
        });
    }

    declineRequest = (id) => {
        console.log(id)
        fetch('/api/timeoffrequest', {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(id)
        });
    }

    render() {
        
        let notifications = this.props.notifications.map((e, i) => {
            return (
                <li key={i}>{e.date}<br/><button onClick={() => {this.acceptRequest(e.id)}}>Accept</button><button onClick={() => this.declineRequest(e.id)}>Decline</button><br/></li>
            );
        });
        console.log(this.props.notifications)
        return (
            <div className="popup">
                <div className="popup-form">
                    <label htmlFor="employee">Requests</label>
                    <div className="styled-select">
                        {notifications}
                    <br/>
                    <br/>
                    </div>
                    <button className="form_button close" onClick={() => this.props.back()}>Close</button>
                </div>
            </div>
        );
    }
}