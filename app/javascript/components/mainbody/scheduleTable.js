import React from 'react'


export default class ScheduleTable extends React.Component {
    state = {
        employeeShifts: []
    }

    componentDidMount() {
        this.fetchData();
        this.interval = setInterval(() => this.refresh(), 500);
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

    render() {
        const data = this.state.employeeShifts;
        const currentDate = this.props.currentDate;
        const employeeId = [];
        const employeeNames = [];
        const shiftInfo = [];
        const randomColor = () => {
            // var max = 0xffffff;
            // return '#' + Math.round( Math.random() * max ).toString( 16 )
            return '#ffff'
        };

        data.forEach(function(employee){
            employee.shifts.forEach(function(shift){
                if(shift.day === currentDate) {
                    employeeId.push(shift.employee_id);
                    shiftInfo.push({start: (shift.start_time - 9) * 80, length: shift.duration * 80, note: shift.note})
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
            return shiftInfo[0] ? shiftInfo[0].length : [];
            
        }
        function checkStartExist() {
            return shiftInfo[0] ? shiftInfo[0].start : [];
        }
        function checkNoteExist() {
            return shiftInfo[0] ? shiftInfo[0].note : [];
        }

        const firstEmployee = employeeNames[0];
        const listOfEmployees = employeeNames.slice(1).map(function(name, i) {
            return (
                <tr key={i + 1}>
                    <td key={i + 1} colSpan="14">
                        <span
                        key={i + 1} 
                        style={{
                        width: shiftInfo[i + 1].length, 
                        marginLeft: shiftInfo[i + 1].start, 
                        backgroundColor: randomColor()}}>
                        {name}<br/><hr/>
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
                        <th>10:00PM</th>
                    </tr>

                        <tr className="test" >
                            
                            <td colSpan="14">
                                <span 
                                key={0}
                                style={{
                                width: checkLengthExist(), marginLeft: checkStartExist(),
                                backgroundColor: randomColor()}}>
                                {firstEmployee}<br/><hr/>
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