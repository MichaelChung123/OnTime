import React from 'react'

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  onClick = () => {
    this.setState({
      redirect: true
    });
  }



render() {

  return (

    <div className="landing-container">
        <div className="landing-content-container">
            <div className="landing-title-container">

              <div className="landing-title">OnTime</div>
              <div className="landing-description">Let's start scheduling</div>
            </div>

            <div className="landing-button-container">
              <button className="landing-button" onClick={this.setRedirect}>ADMIN</button>
              <button className="landing-button" onClick={this.setRedirect}>EMPLOYEE</button>
            </div>
        </div>

    </div>

  )
}
}