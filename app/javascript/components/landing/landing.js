import React from 'react'

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  onClickAdmin = () => {
    this.setState({
      redirect: true
    });
    location.href='http://localhost:3000/app/index'
  }

  onClickEmp = () => {
    location.href='http://localhost:3000/employee'
  }



render() {

  return (

    <div className="landing-container">
        <div className="landing-content-container">
            <div className="landing-title-container">

              <div className="landing-title"><i className="far fa-clock"></i>nTime</div>
              <div className="landing-description">Let's start scheduling</div>
            </div>

            <div className="landing-button-container">
              <button className="landing-button" onClick={() => this.onClickAdmin()}>ADMIN</button>
              <button className="landing-button" onClick={() => this.onClickEmp()}>EMPLOYEE</button>
            </div>
        </div>

    </div>

  )
}
}