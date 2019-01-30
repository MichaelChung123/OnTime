import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import Footer from './footer/footer'
import SideEmployee from './sides/sideEmployee'
import ScheduleApp from './mainbody/scheduleApp';
import MentorCalculator from './logistics/mentorcalculator'
import AvailableEmployees from './logistics/availableEmployees'

export default class App extends React.Component {
    render(){
        return(
            <div>
                <NavBar />

                <SideBar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <MentorCalculator />
                <AvailableEmployees />
            </div>
        )
    }
}
