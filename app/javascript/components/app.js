import React from 'react'
import NavBar from './nav/navbar'
import SideBar from './sides/sidebar'
import ScheduleApp from './mainbody/scheduleApp';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import dateFns from 'date-fns'
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedDate: new Date(),
            employeeShifts: [],
            requests: [],
            notificationStr: [],
            pending: false,
            approved: false
        }

        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        fetch('/api/employeeshifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employeeShifts: data }) });

        fetch('/api/timeoffrequest')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ requests: data }) });

        this.interval = setInterval(() => this.refresh(), 1000);
    }

    refresh() {
        this.setState({
            notificationStr: []
        });

        const { notificationStr } = this.state;

        fetch('/api/timeoffrequest')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ requests: data }) });

        for (let req of this.state.requests) {
            for (let emp of this.state.employeeShifts) {
                if (req.employee_id === emp.id && req.accepted === false) {
                    if (req.end_month === null || req.end_day === null) {
                        const startDate = new Date(`${req.year}-${req.start_month}-${req.start_day}`);
                        const dateStr = `${dateFns.format(startDate, 'MMM Do ddd')} by ${emp.first_name} ${emp.last_name} (${req.reason})`;
                        notificationStr.push({date: dateStr, id: req.id});

                        this.setState({
                            notificationStr
                        });                        
                    }
                    else {
                        const startDate = new Date(`${req.year}-${req.start_month}-${req.start_day}`);
                        const endDate = new Date(`${req.year}-${req.end_month}-${req.end_day}`);
                        const dateStr = `${dateFns.format(startDate, 'MMM Do ddd')} to ${dateFns.format(endDate, 'MMM Do ddd')} by ${emp.first_name} ${emp.last_name} (${req.reason})`;
                        notificationStr.push({date: dateStr, id: req.id});

                        this.setState({
                            notificationStr
                        });
                    }
                    
                }
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getDate = (date) => {
        this.setState({
            clickedDate: date
        })
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

        let notifications = this.state.notificationStr.map((e, index) => {
            return (
                <li key={index}>{e}</li>
            );
        });

        return (
            <div>
                <NavBar notifications={this.state.notificationStr} count={this.state.notificationStr.length}/>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <ScheduleApp getDate={this.getDate} />
                <SideBar getDate={this.state.clickedDate} addShift={this.addShift} createNotification={this.createNotification} refresh={this.refresh}/>
                <NotificationContainer />
            </div>
        )
    }
}
{/* <Footer /> */ }


