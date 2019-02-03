import React from 'react'
import NavBar from './nav/navbar'
import Landing from './mainbody/landing'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render(){

        return(
            <div>


                <Landing />
            </div>
        );
    }
}

