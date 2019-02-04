import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import Footer from './footer/footer'
import SideEmployee from './sides/sideEmployee'
import ScheduleApp from './mainbody/scheduleApp';
import MentorCalculator from './logistics/mentorcalculator'
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedDate: new Date(),
            employeeShifts: [],
            pending: false,
            approved: false
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

    getNotifications() {
        setInterval(5000);

        
    }

    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };


    render() {

        return (
            <div>
                <NavBar />

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <ScheduleApp getDate={this.getDate} />
                <SideBar getDate={this.state.clickedDate} addShift={this.addShift} createNotification={this.createNotification} />
                
                <MentorCalculator />
                <NotificationContainer/>
            </div>
        )
    }
}
{/* <Footer /> */ }


