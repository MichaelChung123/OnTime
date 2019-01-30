import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import Footer from './footer/footer'
import SideEmployee from './sides/sideEmployee'
import ScheduleApp from './mainbody/scheduleApp';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedDate: new Date()
        }

        this.getDate = this.getDate.bind(this);
    }

    getDate = (date) => {
        this.setState({
            clickedDate: date
        })
    }
    
    render(){

        return(
            <div>
                <NavBar />
                <ScheduleApp getDate={this.getDate} />
                <SideBar getDate={this.state.clickedDate}/>
                
            </div>
        )
    }
}

{/* <Footer /> */}

