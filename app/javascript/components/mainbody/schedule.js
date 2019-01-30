import React from 'react'
import ScheduleTable from './scheduleTable'


export default class Schedule extends React.Component {
    render() {
        return(
            <div><br/><br/>
                <h1>this is new schedule platform</h1>
                <button onClick={() => this.props.backClick()}>back</button>
                <div className="schedule-weekly-container">
                    <nav className="schedule-weekly-nav">
                    this is where values from clicked calendar will go
                    </nav><br/>
                </div>
                <ScheduleTable employees={this.props.employees}/>
            </div>
        )
    }
}