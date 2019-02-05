import React from 'react'
import NavBar from './nav/navbar'
import Landing from './landing/landing'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){

        return(
          <div className="landing-body">

                <Landing />
          </div>

        );
    }
}

