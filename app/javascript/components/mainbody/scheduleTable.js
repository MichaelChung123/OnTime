import React from 'react'
import dateFns from 'date-fns'
import EditShift from './scheduleEditShift'
import MentorCalculator from '../logistics/mentorcalculator'

export default class ScheduleTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            employeeShifts: [],
            showEdit: false,
            shiftEditId: '',
            empEditId: '',
            requests: [],
            allEmployees: [],
            availabilities: [],
            mounted: false
        }
    }

    componentDidMount() {
        this.fetchData();
        this.interval = setInterval(() => this.refresh(), 300);
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
    }

    fetchData() {
        fetch('/api/employeeshifts')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ employeeShifts: data }) });
        fetch('/api/timeoffrequest')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ requests: data }) });
        fetch('/api/employees')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ allEmployees: data }) });

        fetch('/api/availability')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ availabilities: data }) });
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
            body: JSON.stringify(shiftId)
        });
    };

    showEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }

    shiftData = () => {
        const target = event.target.parentElement;
        const shiftId = target.getAttribute('shift-key');
        const employeeId = target.getAttribute('empid-key');
        this.setState({
            shiftEditId: shiftId,
            empEditId: employeeId
        })
    }

    editShift = (startTime, endTime, note, shiftData, empData) => {
        const duration = endTime - startTime;

        fetch('/api/shifts', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                employeeId: empData,
                shiftId: shiftData,
                start: startTime,
                end: endTime,
                note: note,
                duration: duration
            })
        });

    };

    cancel = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }


    render() {
        const currentDay = this.props.currentDay;
        const shiftData = this.shiftData;
        const showEdit = this.showEdit;
        const editShift = this.editShift
        const deleteShift = this.deleteShift;
        const cancel = this.cancel;
        const data = this.state.employeeShifts;
        const currentDate = dateFns.format(currentDay, 'dddd MMMM Do');
        const currentDateDay = dateFns.format(currentDay, 'dddd');
        const employeeId = [];
        const shiftId = [];
        const shiftInfo = [];
        const employeeNames = [];
        const availableEmployee = [];
        const requestData = [];
        const notAvailableEmpId = [];
        const timeOffRequests = this.state.requests.filter((request) => {
            if (request.accepted === true) return request
        })

        data.forEach(function(employee) {
            employee.shifts.forEach(function(shift){
                if(shift.day === currentDate) {
                    employeeId.push(shift.employee_id);
                    shiftId.push(shift.id);
                    shiftInfo.push({start: (shift.start_time - 9) * 7.66, length: shift.duration * 7.692, note: shift.note})
                }
            });
        });

        employeeId.forEach(function(employeeId){
            data.forEach(function(employee){
                if (employee.id === employeeId) {
                    employeeNames.push(employee.first_name + ` `+ employee.last_name)
                }
            });
        });

        timeOffRequests.forEach((request) => {
            const data = {
                employee_id: request.employee_id,
                dates: []
            };
            let end;
            const start = new Date(`${request.year}-${request.start_month}-${request.start_day}`);
            if (request.end_month === null || request.end_day === null) {
                end = new Date(`${request.year}-${request.start_month}-${request.start_day}`);
            } else {
                end = new Date(`${request.year}-${request.end_month}-${request.end_day}`);
            }
            
            for (var day = start; day <= end; day.setDate(day.getDate() + 1)) {
                data.dates.push(dateFns.format(day, 'dddd MMMM Do'));
            };
            requestData.push(data);
        });

        requestData.forEach((request) => {
            request.dates.forEach((day) => {
                if (day == currentDate) {
                    notAvailableEmpId.push(request.employee_id)
                }
            });
        });

        this.state.availabilities.forEach((availability) => {
            const day = dateFns.format(currentDay, 'dddd');
            if (availability.day == day && availability.start_time !== 0 && availability.end_time !== 0 && !notAvailableEmpId.includes(availability.employee_id)) {
                const data = {
                    employeeId: availability.employee_id,
                    start: availability.start_time,
                    end: availability.end_time
                };
                availableEmployee.push(data);
            }

        });

        this.state.allEmployees.forEach((employee) => {
            availableEmployee.forEach((availEmp, i) => {
                if (employee.id == availEmp.employeeId) {
                    availableEmployee[i].firstName = employee.first_name;
                    availableEmployee[i].lastName = employee.last_name;
                    availableEmployee[i].occupation = employee.occupation;
                }
            });
        });


        function checkLengthExist() {
            return shiftInfo[0] ? `${shiftInfo[0].length}%` : 0;
        }
        function checkStartExist() {
            return shiftInfo[0] ? `${shiftInfo[0].start}%` : 0;
        }
        function checkNoteExist() {
            return shiftInfo[0] ? shiftInfo[0].note : null;
        }
        function addDeleteButton() {
            return shiftInfo[0] ? (<button onClick={() => {deleteShift()}} className="delete-shift">Delete</button>) : null;
        }
        function addEditButton() {
            return shiftInfo[0] ? (<button onClick={() => {showEdit(); shiftData()}} className="edit-shift">Edit</button>) : null;
        }
        function findDayforMon(currentDateDay) {
            let position = 0;
            const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            week.forEach((day,i) => {if (currentDateDay == day) position = i});
            return position;
        }

        const firstEmployee = employeeNames[0];

        const listOfEmployees = employeeNames.slice(1).map(function(name, i) {
            return (
                <tr key={i + 2}>
                    <td key={i + 2} colSpan="13">
                        <span
                        key={i + 2}
                        shift-key={shiftId[i + 1]}
                        empid-key={employeeId[i + 1]}
                        style={{
                        display: 'block',
                        width: `${shiftInfo[i + 1].length}%`,
                        marginLeft: `${shiftInfo[i + 1].start}%`,
                        wordWrap: "break-word"}}
                        >
                        {name} {addDeleteButton()} {addEditButton()}<hr/>
                        {shiftInfo[i + 1].note}
                        </span>
                    </td>
                </tr>
            )
        });

        const whoIsAvailable = availableEmployee.map((employee) => {
            let convertStartTime;
            let convertEndTime;
                if (employee.start == 12) {convertStartTime = employee.start + 'PM'} else if (employee.start > 12) {convertStartTime = employee.start - 12 + 'PM'} else {convertStartTime = employee.start + 'AM'}
                if (employee.end == 12) {convertEndTime = employee.end + 'PM'} else if (employee.end > 12) {convertEndTime = employee.end - 12 + 'PM'} else {convertEndTime = employee.end + 'AM'}
            return (<available className="employee-available">{employee.firstName}  {employee.lastName} ({employee.occupation})  {convertStartTime} - {convertEndTime}</available>)
        });

        const dateFormatForWeek = dateFns.format(currentDay, 'YYYY, M, D');
        const monForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay));
        const tuesForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 1);
        const wedForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 2);
        const thursForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 3);
        const friForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 4);
        const satForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 5);
        const sunForWeeklyView = dateFns.subDays(dateFormatForWeek, findDayforMon(currentDateDay) - 6)

        function findWeeklyMon(monForWeeklyView) {
            const monDate = dateFns.format(monForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
                        if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<monday>{info}</monday>)
            })
        };

        function findWeeklyTues(tuesForWeeklyView) {
            const monDate = dateFns.format(tuesForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
                        if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<tuesday>{info}</tuesday>)
            })
        };
        function findWeeklyWed(wedForWeeklyView) {
            const monDate = dateFns.format(wedForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
                        if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<wednesday>{info}</wednesday>)
            })
        };
        function findWeeklyThurs(ThursForWeeklyView) {
            const monDate = dateFns.format(ThursForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
                        if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<thursday>{info}</thursday>)
            })
        };
        function findWeeklyFri(FriForWeeklyView) {
            const monDate = dateFns.format(FriForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
                        if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<friday>{info}</friday>)
            })
        };
        function findWeeklySat(SatForWeeklyView) {
            const monDate = dateFns.format(SatForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
                        if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<saturday>{info}</saturday>)
            })
        };
        function findWeeklySun(SunForWeeklyView) {
            const monDate = dateFns.format(SunForWeeklyView, 'dddd MMMM Do');
            let result = [];
            data.forEach(function(employee) {
                employee.shifts.forEach(function(shift) {
                    if (shift.day == monDate) {
                        let convertStartTime;
                        let convertEndTime;
                        if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
                        if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
                        result.push(`${employee.first_name} ${employee.last_name} ${convertStartTime} - ${convertEndTime}`);
                    }
                });
            });
            return result.map(function(info) {
                return (<sunday>{info}</sunday>)
            })
        };


        return(
            <div>
                <div className={`schedule-platform${this.state.mounted ? " enter" : ""}`}>
                <div className="schedule-container">
                    <table className="schedule-weekly-table">
                        <thead>
                            <tr className="weekly-time">

                                <th>9am</th>
                                <th>10am</th>
                                <th>11am</th>
                                <th>12pm</th>
                                <th>1pm</th>
                                <th>2pm</th>
                                <th>3pm</th>
                                <th>4pm</th>
                                <th>5pm</th>
                                <th>6pm</th>
                                <th>7pm</th>
                                <th>8pm</th>
                                <th>9pm</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="13">
                                {(shiftId.length !== 0) ?
                                    <span
                                    key={1}
                                    shift-key={shiftId[0]}
                                    empid-key={employeeId[0]}
                                    style={{
                                    display: 'block',
                                    width: checkLengthExist(), marginLeft: checkStartExist(),
                                    wordWrap: "break-word"}}
                                    >
                                    {firstEmployee} {addDeleteButton()} {addEditButton()}<hr/>
                                    {checkNoteExist()}
                                    </span>
                                : <h4 className="nothing-scheduled">Nothing scheduled</h4>
                                }
                                </td>
                            </tr>

                            {listOfEmployees}
                        </tbody>
                    </table><br/>
                    {this.state.showEdit ? <EditShift cancel={cancel} editShift={editShift} shiftData={this.state.shiftEditId} empData={this.state.empEditId}/> : null}
                </div>
                </div>
                <div className={`available-container${this.state.mounted ? " enter" : ""}`}>
                     <MentorCalculator />
                    <h2 className="available-employee-title">Available Employees</h2>
                    {whoIsAvailable}
                </div>

                <div className={`weekly-view-container${this.state.mounted ? " enter" : ""}`}><br/><br/><br/>
                    <h2>Weekly Overview</h2>
                    <table className="weekly-view">
                        <tr>
                            <th>Monday <br></br> {dateFns.format(monForWeeklyView, 'Do')}</th>
                            <th>Tuesday <br></br> {dateFns.format(tuesForWeeklyView, 'Do')}</th>
                            <th>Wednesday <br></br> {dateFns.format(wedForWeeklyView, 'Do')}</th>
                            <th>Thursday  <br></br> {dateFns.format(thursForWeeklyView, 'Do')}</th>
                            <th>Friday <br></br> {dateFns.format(friForWeeklyView, 'Do')}</th>
                            <th>Saturday <br></br> {dateFns.format(satForWeeklyView, 'Do')}</th>
                            <th>Sunday <br></br> {dateFns.format(sunForWeeklyView, 'Do')}</th>
                        </tr>
                        <tr>
                            <td>{findWeeklyMon(monForWeeklyView)}</td>
                            <td>{findWeeklyTues(tuesForWeeklyView)}</td>
                            <td>{findWeeklyWed(wedForWeeklyView)}</td>
                            <td>{findWeeklyThurs(thursForWeeklyView)}</td>
                            <td>{findWeeklyFri(friForWeeklyView)}</td>
                            <td>{findWeeklySat(satForWeeklyView)}</td>
                            <td>{findWeeklySun(sunForWeeklyView)}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}