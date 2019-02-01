import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import Footer from './footer/footer'
import SideEmployee from './sides/sideEmployee'
import ScheduleApp from './mainbody/scheduleApp';
import MentorCalculator from './logistics/mentorcalculator'
import Landing from './mainbody/landing'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){

        return(
            <div>


                <Landing />

            </div>
        )
    }
}

