import React from 'react'
import dateFns from 'date-fns'


export default class Popup extends React.Component {
    state = {
        clickedDate: this.props.getDate
    }
    render() {

        const getDate = this.state.clickedDate;
        console.log(this.state.clickedDate)
        const clickedDay = dateFns.format(this.state.getDate, 'dddd MMMM Do').replace(/ .*/,'');
        // const clickedMonth = dateFns.format(this.state.getDate, 'MMM');
        // const positionMon = this.state.getDate.getDate();
        const employees = this.props.listOfEmployees.map((e) => {
            return <option key={e.id} data-key={e.id}>{e.first_name} {e.last_name} ({e.occupation})</option>
        });


        function values(event, cb) {
            event.preventDefault();
            const day = document.getElementById("day").options[document.getElementById("day").selectedIndex].value;
            const employeeId = document.getElementById("employee").options[document.getElementById("employee").selectedIndex].getAttribute('data-key');
            const startTime = document.getElementById("start_time").options[document.getElementById("start_time").selectedIndex].value;
            const endTime = document.getElementById("end_time").options[document.getElementById("end_time").selectedIndex].value;
            const duration = endTime - startTime;
            const notes = document.getElementById("notes").value
            
            let data = {
                employee_id: employeeId,
                day: day,
                start_time: startTime,
                end_time: endTime,
                duration: duration,
                note: notes
            }

            if (duration > 0) {
            fetch('/api/shifts', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            cb();
            } else {
                alert(`Please double check scheduling time`)
            }
        }
        
        function setValueMon(clickedDay) {
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            let clickedPosition = 0; 
            days.forEach((day, position) => { if (clickedDay == day) clickedPosition = position });
            return clickedPosition
        }

        getDate.setDate(getDate.getDate() - setValueMon(clickedDay));
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
                <div className="form_container">
                    <label for="employee">Employee</label>

                        <br></br>
                        <select id="employee" className="popup_form">
                            {employees}
                        </select><br/>
                    <label for="day">Day</label>
                        <br></br>
                        <select id="day" className="popup_form">
                            <option value={monday}>{monday}</option>
                            <option value={tuesday}>{tuesday}</option>
                            <option value={wednesday}>{wednesday}</option>
                            <option value={thursday}>{thursday}</option>
                            <option value={friday}>{friday}</option>
                            <option value={saturday}>{saturday}</option>
                            <option value={sunday}>{sunday}</option>
                        </select><br/>

                    <label for="start_time">Start Time</label>
                        <br></br>
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
                        <br></br>
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
                    
                    <textarea id="notes"></textarea>
                    <br></br>
                    <button className="form_button_schedule" onClick={(event) => {values(event, this.props.closePopup)}}>Schedule</button>
                    <br></br>
                    <button className="form_button_close" onClick={() => this.props.closePopup()}>Close</button>

                </div>
            </div>
        )
    }
}


