import React from 'react'
import NavBar from './nav/navbar'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){

        return(
            <div>
                <NavBar />

            </div>
        )
    }
}

