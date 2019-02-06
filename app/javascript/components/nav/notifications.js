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
                <div className="notifcation-list-container">
                    <li key={i}>{e.date}
                        <button className="request-button accept" onClick={() => {this.acceptRequest(e.id)}}><i className="fas fa-check-circle"></i></button>
                        <button className="request-button decline" onClick={() => this.declineRequest(e.id)}><i className="fas fa-times-circle"></i></button>
                    <br/></li>
                </div>
            );
        });

        return (
            <div className="popup">
                <div className="popup-form">
                    <div className="popup-request-title">
                        <i className="fas fa-bell"></i>
                        Requests
                    </div>

                    <div className="styled-select">
                        {notifications}
                    <br/>
                    <br/>
                    </div>
                    <button className="notifcation-button-close" onClick={() => this.props.back()}>Close</button>
                </div>
            </div>
        );
    }
}