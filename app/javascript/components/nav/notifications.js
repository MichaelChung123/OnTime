import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Notifications extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    acceptRequest = () => {
        console.log(`accp`)
    }

    declineRequest = () => {
        console.log(`dec`)
    }

    render() {

        let notifications = this.props.notifications.map((e, index) => {
            return (
                <li key={index} data-key={index + 1}>{e}<br/><button onClick={() => {this.acceptRequest()}}>Accept</button><button onClick={() => this.declineRequest()}>Decline</button><br/></li>
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