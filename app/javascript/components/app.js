import React from 'react'
import SideBar from './sides/sidebar'
import SideEmployee from './sides/sideEmployee'
import ScheduleApp from './mainbody/scheduleApp';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <ScheduleApp />,
                <SideBar />
            </div>       
        )
    }
}
