import React from 'react'
import { BrowserRouter as Router, Route, Redirect, UpdateBlocker } from 'react-router-dom'

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false
    };

    // this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.setRedirect = this.setRedirect.bind(this);

  }

  setRedirect = () => {
    if (this.state.redirect && this.state.email === "davey@lighthouselabs.ca" && this.state.password === "123") {
      console.log("Authentication Successful!");
      setRedirect = () => {
        window.location = "http://0.0.0.0:3000/app/index";
      }
    }
    else if (this.state.email !== "davey@lighthouselabs.ca" || this.state.password !== "123") {
      alert("Authentication Failed");
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

  render() {
    console.log("In render");

    if (this.state.redirect) {
      return (
        <Router>
          <Redirect to="/app/index" />
        </Router>
      );
    }

    return (
      <Router>
        <Route>
          <div>
            <br /><br /><br /><br /><br /><br />
            <div className="Login">
              <form onSubmit={this.handleSubmit}>
                <label>Email</label><br />
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input><br />

                <label>Password</label><br />
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input><br />
              </form>

              <button type="submit" onClick={this.setRedirect}>Login</button>

            </div>
          </div>
        </Route>
      </Router>
    )
  }
}