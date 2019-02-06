import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Notifications extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {

        let notifications = this.props.notifications.map((e, index) => {
            return (
                [<label key={index + 1}>{e}</label>, <br key={-index - 1} />]
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
                        <br />
                        <br />
                        <br />
                    </div>
                    <button className="notifcation-button-close" onClick={() => this.props.back()}>Close</button>
                </div>
            </div>
        );
    }
}