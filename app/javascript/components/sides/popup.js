import React from 'react'

export default class Popup extends React.Component {
    state = {
        getDate: this.props.getDate
    }

    render() {
        function values(event, cb) {
            event.preventDefault();
            const day = document.getElementById("day").options[document.getElementById("day").selectedIndex].value;
            const employeeId = document.getElementById("employee").options[document.getElementById("employee").selectedIndex].getAttribute('data-key');
            const startTime = document.getElementById("start_time").options[document.getElementById("start_time").selectedIndex].value;
            const endTime = document.getElementById("end_time").options[document.getElementById("end_time").selectedIndex].value;
            const duration = endTime - startTime;

            let data = {
                employee_id: employeeId,
                day: day,
                start_time: startTime,
                end_time: endTime,
                duration: duration
            }
            
            if (duration > 0) {
            fetch('/api/shifts', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            cb()
            } else {
                alert(`Please double check scheduling time`)
            }
            

        }
        console.log(this.state.getDate)
        const employees = this.props.listOfEmployees.map((e, i) => {
            return <option key={e.id} data-key={e.id}>{e.first_name} {e.last_name} ({e.occupation})</option>
        });
        return (
            <div className="popup">
                <div className="form_container">
                    <label for="employee">Employee</label>
                        <select id="employee" className="popup_form">
                            {employees}
                        </select><br/>

                    <label for="day">Day</label>
                        <select id="day" className="popup_form">
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select><br/>

                    <label for="start_time">Star Time</label>
                        <select id="start_time" className="popup_form">
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

                    <label for="end_time">End Time</label>
                        <select id="end_time" className="popup_form">
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

                    <button className="form_button" onClick={(event) => {values(event, this.props.closePopup)}}>Schedule!</button>
                    <button className="form_button" onClick={() => this.props.closePopup()}>Close</button>
                </div>
            </div> 
        ) 
    }
  }


