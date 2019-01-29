import React from 'react'
import Calendar from './scheduleCalendar'
// import './scheduleApp.css'


export default class ScheduleApp extends React.Component {
    render() {
        return(
            <div>
                <main>
                    <Calendar />
                </main>
            </div>
        )
    }
}