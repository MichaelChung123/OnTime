import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import Footer from './footer/footer'
import SideEmployee from './sides/sideEmployee'
import ScheduleApp from './mainbody/scheduleApp';
import MentorCalculator from './logistics/mentorcalculator'
// import AvailableEmployees from './logistics/availableEmployees'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedDate: new Date(),
            employeeShifts: []
        }

        this.getDate = this.getDate.bind(this);
    }
    componentDidMount() {
        fetch('/api/employeeshifts')
        .then((response) => { return response.json() })
        .then((data) => { this.setState({ employeeShifts: data }) });
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


                <br></br>
                <br></br>
                <br></br>
                <br></br>


                <ScheduleApp getDate={this.getDate} />
                <SideBar getDate={this.state.clickedDate} addShift={this.addShift} />

                
                

            </div>
        )
    }
}
{/* <MentorCalculator /> */}
{/* <Footer /> */}


