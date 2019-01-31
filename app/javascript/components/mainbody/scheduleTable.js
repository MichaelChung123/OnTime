import React from 'react'


export default class ScheduleTable extends React.Component {
    
    render() {
        const data = this.props.employeeShifts;
        const currentDate = this.props.currentDate;
        const employeeId = [];
        const employeeNames = [];
        const randomColor = () => {
            var max = 0xffffff;
            return '#' + Math.round( Math.random() * max ).toString( 16 )
        };

        data.forEach(function(employee){
            employee.shifts.forEach(function(shiftDay){
                if(shiftDay.day === currentDate) {
                    employeeId.push(shiftDay.employee_id);
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
        const totalEmployeesScheduled = employeeNames.length;
        const firstEmployee = employeeNames[0];
        const listOfEmployees = employeeNames.slice(1).map(function(name ,i) {
            return (
                <tr>
                    <td colSpan="14"><span style={{display: 'block', width: "200px", backgroundColor: randomColor()}}>{name}</span></td>
                </tr>
            )
        })

        return(
            <div className="schedule-container">
                <table className="schedule-weekly-table">
                    <tr className="weekly-time">
                        <td></td>
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
                            <th className='day' rowSpan={totalEmployeesScheduled}>{currentDate}</th>
                            <td colSpan="14"><span style={{display: 'block', width: "200px", backgroundColor: randomColor()}}>{firstEmployee}</span></td>
                        </tr>
                        {listOfEmployees}
                </table>
                
            </div>
        )
    }
}