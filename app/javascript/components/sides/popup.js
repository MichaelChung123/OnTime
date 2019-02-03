import React from 'react'
import dateFns from 'date-fns'


export default class Popup extends React.Component {
    state = {
        clickedDate: this.props.getDate,
    }

    componentDidMount() {
        this.Interval = setInterval(() => this.props.refresh(), 300)
    }

    componentWillUnmount() {
        clearInterval(this.Interval)
    }

    render() {
        const shifts = this.props.shifts;
        const getDate = this.props.getDate;
        const employees = this.props.listOfEmployees.map((e) => {
            return <option key={e.id} data-key={e.id}>{e.first_name} {e.last_name} ({e.occupation})</option>
        });


        function values(event, cb, refresh) {
            event.preventDefault();
            const day = document.getElementById("day").options[document.getElementById("day").selectedIndex].value;
            const employeeId = document.getElementById("employee").options[document.getElementById("employee").selectedIndex].getAttribute('data-key');
            const startTime = document.getElementById("start_time").options[document.getElementById("start_time").selectedIndex].value;
            const endTime = document.getElementById("end_time").options[document.getElementById("end_time").selectedIndex].value;
            const duration = endTime - startTime;
            const notes = document.getElementById("notes").value;
            let shiftExist = false;

            let data = {
                employee_id: employeeId,
                day: day,
                start_time: startTime,
                end_time: endTime,
                duration: duration,
                note: notes
            }

            let filterShift = shifts.filter((shift) => {
                if (shift.employee_id == employeeId && shift.day == day) return shift
            })
            filterShift.forEach((shift) => {
                if (shift.employee_id == employeeId) {
                    shiftExist = true;
                } else {
                    shiftExist = false;
                }
            })
            refresh();
            console.log(shiftExist)
            if (duration > 0 && !shiftExist) {
            fetch('/api/shifts', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            cb();
            } else {
                confirm(`Please double check scheduling time and shift already exists!`)
            }

        }

        getDate.setDate(getDate.getDate());
        const monday = dateFns.format(getDate.toISOString(), 'dddd MMMM Do');
        getDate.setDate(getDate.getDate() + 1);
        const tuesday = dateFns.format(getDate.toISOString(), 'dddd MMMM Do');
        getDate.setDate(getDate.getDate() + 1);
        const wednesday = dateFns.format(getDate.toISOString(), 'dddd MMMM Do');
        getDate.setDate(getDate.getDate() + 1);
        const thursday = dateFns.format(getDate.toISOString(), 'dddd MMMM Do');
        getDate.setDate(getDate.getDate() + 1);
        const friday = dateFns.format(getDate.toISOString(), 'dddd MMMM Do');
        getDate.setDate(getDate.getDate() + 1);
        const saturday = dateFns.format(getDate.toISOString(), 'dddd MMMM Do');
        getDate.setDate(getDate.getDate() + 1);
        const sunday = dateFns.format(getDate.toISOString(), 'dddd MMMM Do');
        getDate.setDate(getDate.getDate() - 6);

        return (
            <div className="popup">
                <div className="popup-form">
                <div className="popup-form-title">
                    <i className="fas fa-plus-circle"></i>
                    <h2>Add a shift</h2>
                </div>
                    <label for="employee">Employee</label>
                        <div className="styled-select">

                            <select>
                                {employees}
                            </select><br/>
                        </div>
                    <label for="day">Day</label>
                        <div className="styled-select">

                            <select>
                                <option value={monday}>{monday}</option>
                                <option value={tuesday}>{tuesday}</option>
                                <option value={wednesday}>{wednesday}</option>
                                <option value={thursday}>{thursday}</option>
                                <option value={friday}>{friday}</option>
                                <option value={saturday}>{saturday}</option>
                                <option value={sunday}>{sunday}</option>
                            </select><br/>
                        </div>

                    <label for="start_time">Start Time</label>
                        <div className="styled-select">
                            <select>
                                <option value="9">9:00 AM</option>
                                <option value="10">10:00 AM</option>
                                <option value="11">11:00 AM</option>
                                <option value="12">12:00 PM</option>
                                <option value="13">1:00 PM</option>
                                <option value="14">2:00 PM</option>
                                <option value="15">3:00 PM</option>
                                <option value="16">4:00 PM</option>
                                <option value="17">5:00 PM</option>
                                <option value="18">6:00 PM</option>
                                <option value="19">7:00 PM</option>
                                <option value="20">8:00 PM</option>
                                <option value="21">9:00 PM</option>
                                <option value="22">10:00 PM</option>
                            </select><br/>
                        </div>

                    <label for="end_time">End Time</label>
                        <div className="styled-select">
                            <select>
                                <option value="10">10:00 AM</option>
                                <option value="11">11:00 AM</option>
                                <option value="12">12:00 PM</option>
                                <option value="13">1:00 PM</option>
                                <option value="14">2:00 PM</option>
                                <option value="15">3:00 PM</option>
                                <option value="16">4:00 PM</option>
                                <option value="17">5:00 PM</option>
                                <option value="18">6:00 PM</option>
                                <option value="19">7:00 PM</option>
                                <option value="20">8:00 PM</option>
                                <option value="21">9:00 PM</option>
                                <option value="22">10:00 PM</option>
                            </select><br/>
                        </div>

                    <textarea id="notes" placeholder="Notes"></textarea>
                    <br></br>
                    <button className="form_button schedule" onClick={(event) => {values(event, this.props.closePopup, this.props.refresh)}}>Schedule</button>
                    <br></br>
                    <button className="form_button close" onClick={() => this.props.closePopup()}>Close</button>

                </div>
            </div>
        )
    }
}


