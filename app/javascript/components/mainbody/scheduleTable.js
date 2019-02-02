import React from 'react'
import dateFns from 'date-fns'

export default class ScheduleTable extends React.Component {
    state = {
        employeeShifts: []
    }
    
    componentDidMount() {
        this.fetchData();
        this.interval = setInterval(() => this.refresh(), 300);
    }
    fetchData() {
        fetch('/api/employeeshifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employeeShifts: data }) });
    }

    refresh() {
        this.fetchData();
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    deleteShift() {
        
        
        const target = event.target.parentElement;
        const shiftId = target.getAttribute('shift-key');        
        fetch(`/api/shifts`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.parse(shiftId)
        });
    };

    render() {
        
        const deleteShift = this.deleteShift
        const data = this.state.employeeShifts;
        const currentDate = dateFns.format(this.props.currentDay, 'dddd MMMM Do')
        const employeeId = [];
        const shiftId = [];
        const shiftInfo = [];
        const employeeNames = [];
        // const randomColor = () => {
        //     var max = 0xffffff;
        //     return '#' + Math.round( Math.random() * max ).toString( 16 )
        //     return 'blanchedalmond'
        // };

        data.forEach(function(employee){
            employee.shifts.forEach(function(shift){
                if(shift.day === currentDate) {
                    employeeId.push(shift.employee_id);
                    shiftId.push(shift.id);
                    shiftInfo.push({start: (shift.start_time - 9) * 85, length: shift.duration * 85, note: shift.note})
                }
            });
        });
        employeeId.forEach(function(employeeId){
            data.forEach(function(employee){
                if (employee.id === employeeId) {
                    employeeNames.push(employee.first_name + ` `+ employee.last_name)
                }
            })
        })
        function checkLengthExist() {
            return shiftInfo[0] ? shiftInfo[0].length : 0;      
        }
        function checkStartExist() {
            return shiftInfo[0] ? shiftInfo[0].start : 0;
        }
        function checkNoteExist() {
            return shiftInfo[0] ? shiftInfo[0].note : null;
        }
        function checkShiftExist() {
            return shiftInfo[0] ? (<button onClick={() => deleteShift()} className="delete-shift">delete shift</button>) : null;
        }

        const firstEmployee = employeeNames[0];
        const listOfEmployees = employeeNames.slice(1).map(function(name, i) {
            return (
                <tr key={i + 2}>
                    <td key={i + 2} colSpan="13">
                        <span
                        key={i + 2}
                        shift-key={shiftId[i + 1]}
                        style={{
                        display: 'block',
                        width: shiftInfo[i + 1].length, 
                        marginLeft: shiftInfo[i + 1].start}} 
                        >
                        {name} {checkShiftExist()}<br/><hr/>
                        {shiftInfo[i + 1].note}
                        </span>
                    </td>
                </tr>
            )
        })
        return(
            <div className="schedule-container">
                <table className="schedule-weekly-table">
                    <tr className="weekly-time">
                        <th>9:00AM</th>
                        <th>10:00AM</th>
                        <th>11:00AM</th>
                        <th>12:00PM</th>
                        <th>1:00PM</th>
                        <th>2:00PM</th>
                        <th>3:00PM</th>
                        <th>4:00PM</th>
                        <th>5:00PM</th>
                        <th>6:00PM</th>
                        <th>7:00PM</th>
                        <th>8:00PM</th>
                        <th>9:00PM</th>
                    </tr>

                        <tr>
                            <td colSpan="13">
                                <span 
                                key={1}
                                shift-key={shiftId[0]}
                                style={{
                                display: 'block',
                                width: checkLengthExist(), marginLeft: checkStartExist(),}}
                                >
                                {firstEmployee} {checkShiftExist()}<br/><hr/>
                                {checkNoteExist()}
                                </span>
                            </td>
                        </tr> 
                        {listOfEmployees}
                </table>
                
            </div>
        )
    }
}