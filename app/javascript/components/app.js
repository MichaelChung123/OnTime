import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import SideEmployee from './sides/sideEmployee'
import ScheduleLayout from './sides/mainbody/scheduleLayout';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <ScheduleLayout />,
                <SideBar />
            </div>
        )
    }
}
