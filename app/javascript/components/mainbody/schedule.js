import React from 'react'
import ScheduleTable from './scheduleTable'
import dateFns from "date-fns";

export default class Schedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false,
        }
    }
    
    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
    };

    render() {
        const clickedDay = this.props.currentDay;
        const numDay = clickedDay.getDate();
        const month = clickedDay.getMonth();
        const year = clickedDay.getFullYear();
        const date = new Date(year, month, numDay);
        const formatDate = dateFns.format(date, 'dddd, MMMM Do, YYYY');

        return(
            <div className="day_schedule"><br/><br/>
                <div className={`date-header-container${this.state.mounted ? " enter" : ""}`}>
                        <h2>{formatDate}</h2>
                        <div className="daily_back_button" onClick={() => this.props.backClick()}>
                            <i className="fas fa-arrow-alt-circle-left"></i>
                            Back
                        </div>

                <ScheduleTable employees={this.props.employees} currentDay={this.props.currentDay} />

                </div>
            </div>
        )
    }
}


function add(num) {
    return num * num;
}



