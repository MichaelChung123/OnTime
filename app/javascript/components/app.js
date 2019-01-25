import React from 'react'
import SideBar from './sidebar'

export default class App extends React.Component {
    render() {
        return (
            <div id="App">
                <SideBar />
                <div id="page-wrap">
                    <h1>Starboard</h1>
                    <h2>Schedule Goes Here</h2>
                </div>
            </div>
        );
    }
}


