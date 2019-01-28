import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import SideEmployee from './sides/sideEmployee'

export default class App extends React.Component {
    render(){
        return(
          <div>
            <NavBar />
            <SideBar />
          </div>
        )
    }
}
