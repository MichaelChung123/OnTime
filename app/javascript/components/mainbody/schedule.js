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
        const formatDate = dateFns.format(date, 'dddd MMMM Do');

        return(
            <div><br/><br/><br/><br/>
                <div className="schedule-weekly-container">
                    <nav className="schedule-weekly-nav">
                        <h1>{formatDate}, {year}</h1>
                    </nav><br/>
                </div>
                <ScheduleTable employeeShifts={this.props.employeeShifts} currentDate={formatDate}/>
                <button onClick={() => this.props.backClick()}>back</button>
            </div>
        )
    }
}