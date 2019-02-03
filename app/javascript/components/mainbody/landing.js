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

    <div>
      <br /><br /><br /><br /><br /><br />
      <div className="Login">
        <form onSubmit={this.setRedirect}>
          <label>Email</label><br />
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input><br />

          <label>Password</label><br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input><br />
        </form>
        <button type="submit" onClick={this.setRedirect}>Login</button>

      </div>
    </div>

  )
}
}