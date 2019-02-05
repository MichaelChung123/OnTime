import React from 'react'

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
      employees: [],
      users: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);

  }

  setRedirect() {
    if(this.state.email === "davey@lighthouselabs.ca" && this.state.password === "123") {
      window.location = "http://0.0.0.0:3000/app/index";
    } else if(this.state.email === "employee@email.com" && this.state.password === "123") {
      window.location = "http://0.0.0.0:3000/employee";
    } else {
      alert("Authentication Failed!");
    }
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

handleSubmit = event => {
  event.preventDefault();
}

componentDidMount() {
  fetch('/api/employees')
    .then((response) => { return response.json() })
    .then((data) => { this.setState({ employees: data }) });

  fetch('/api/users')
    .then((response) => { return response.json() })
    .then((data) => { this.setState({ users: data }) });
}

render() {

  return (

    <div className="landing-container">
        <div className="landing-content-container">
            <div className="landing-title-container">

              <div className="landing-title">OnTime</div>
              Let's start scheduling
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