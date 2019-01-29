import React from 'react'


export default class Schedule extends React.Component {
    render() {
        return(
            <div>
                <h1>this is new schedule platform</h1>
                <button onClick={() => this.props.backClick()}>back</button>
            </div>
        )
    }
}