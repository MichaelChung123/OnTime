import React from 'react'
import Calendar from './scheduleCalendar'

export default class ScheduleApp extends React.Component {    

    render() {
        return(
            <div>
                <Calendar getDate={this.props.getDate} />
            </div>
        )
    }
}