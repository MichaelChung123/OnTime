import React from 'react';
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Notifications from './notifications'

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      renderChild: false
    };
  }

  showNotifications = () => {

    this.setState({
      count: this.props.count,
      renderChild: "notifications"
    }, () => {

    });

  }

  back = () => {
    this.setState({
      renderChild: false
    });
  }

  render() {
    let render = this.state.renderChild;

    if (render === "notifications") {
      return (
          <ReactCSSTransitionGroup
            transitionName="popup_css"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Notifications notificationEmpId={this.props.notificationEmpId} requests={this.props.requests} notifications={this.props.notifications} back={this.back} />
          </ReactCSSTransitionGroup>
      );
    }

    return (
      <header className="navbar">
        <nav className="navbar_navigation">
          <div className="navbar_logo"><a href="/">OnTime</a></div>

          <div className="spacer" />
          <div className="navbar_navigation-items">
            <ul>
              <li><a href="/"></a></li>
              <li><a href="/"></a></li>
            </ul>

          </div>

          <div>
            <NotificationBadge count={this.props.count} className={'abc'} effect={Effect.ROTATE_X} />
          </div>

          <button className="navbar-notifcation-button" onClick={this.showNotifications}>
            <i className="fas fa-bell"></i>
          </button>

        </nav>
      </header>
    );
  }

}
