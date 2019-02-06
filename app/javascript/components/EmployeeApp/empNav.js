import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Request from './request'


export default class NavBar extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       renderChild: false
//     };
//   }

//   showNotifications = () => {

//     this.setState({
//       count: this.props.count,
//       renderChild: "notifications"
//     }, () => {

//     });

//   }

  back = () => {
    this.setState({
      renderChild: false
    });
  }

  render() {

    return (
      <header className="navbar">
        <nav className="navbar_navigation">
          <div className="navbar_logo"><a href="/"><i className="far fa-clock"></i>nTime</a></div>

          <div className="spacer" />
          <div className="navbar_navigation-items">
            <ul>
              <li><a href="/"></a></li>
              <li><a href="/"></a></li>
            </ul>

          </div>
          <Request fetchRequestTimeOff={this.props.fetchRequestTimeOff} availabilities={this.props.availabilities}/>

        </nav>
      </header>
    );
  }

}
