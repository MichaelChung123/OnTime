import React from 'react'
import ScheduleTable from './scheduleTable'
import dateFns from "date-fns";

export default class Schedule extends React.Component {
    render() {
        const clickedDay = this.props.currentDay;
        const numDay = clickedDay.getDate();
        const month = clickedDay.getMonth();
        const year = clickedDay.getFullYear();
        const date = new Date(year, month, numDay);
        const formatDate = dateFns.format(date, 'dddd, MMMM Do, YYYY');

        return(
            <div className="day_schedule"><br/><br/>
                <h1>this is new schedule platform</h1>
                <button className="daily_back_button" onClick={() => this.props.backClick()}>back</button>
                <div className="schedule-weekly-container">
                    <nav className="schedule-weekly-nav">
                        <h1>Schedule of: {formatDate}</h1>
                    </nav><br/>
                </div>
                <ScheduleTable employees={this.props.employees} shifts={this.props.shifts}/>
            </div>
        )
    }
}