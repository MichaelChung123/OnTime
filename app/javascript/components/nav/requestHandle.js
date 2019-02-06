import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class RequestHandle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {

        return (
            <div>
                <button>Accept</button>
                <button>Deny</button> 
            </div>
        );
    }
}