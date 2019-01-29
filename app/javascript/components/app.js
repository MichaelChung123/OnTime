import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import Footer from './footer/footer'
import SideEmployee from './sides/sideEmployee'
import ScheduleApp from './mainbody/scheduleApp';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <ScheduleApp />,
                <SideBar />
                <Footer />
            </div>
        )
    }
}
