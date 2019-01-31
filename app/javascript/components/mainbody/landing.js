import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}


// import React from 'react'


// export default class Landing extends React.Component {
    
//     constructor(props) {

//     }


//     render() {
//         return (
//             <div>
//                 <br /><br /><br /><br /><br /><br />
                
//             </div>
//         )
//     }
// }

// export default class Landing extends React.Component {
//     render() {

//         return (
//             <div>
//                 <br /><br /><br /><br /><br /><br />
//                 <form action="action_page.php">
//                     <div className="imgcontainer">
//                         {/* <img src="img_avatar2.png" alt="Avatar" className="avatar"> */}
//                     </div>
//                     <br /><br />
//                     <div className="container">
//                         <label htmlFor="uname"><b>Username</b></label>
//                         <input type="text" placeholder="Enter Username" name="uname" required />
//                         <br /><br />
//                         <label htmlFor="psw"><b>Password</b></label>
//                         <input type="password" placeholder="Enter Password" name="psw" required />
//                         <br /><br />
//                         <button type="submit">Login</button>
//                         <br /><br />
//                         <label>
//                         <input type="checkbox" name="remember" /> Remember me
//                         </label>
//                     </div>
//                     <br /><br />
//                     <div className="container">
//                         <button type="button" className="cancelbtn">Cancel</button>
//                         <br /><br />
//                         <span className="psw">Forgot <a href="#">password?</a></span>
//                     </div>
//                 </form>

//             </div>
//         )
//     }
// }