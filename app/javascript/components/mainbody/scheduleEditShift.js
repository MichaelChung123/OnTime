import React from 'react'


export default class EditShift extends React.Component {
    render() {
        function editHandler(edit, cb, shiftData, empData) {
            const start = document.getElementById("start_time").options[document.getElementById("start_time").selectedIndex].value;
            const end = document.getElementById("end_time").options[document.getElementById("end_time").selectedIndex].value;
            const note = document.getElementById("notes").value;
            edit(start, end, note, shiftData, empData);
            cb();
        }

        return(
            <div className="popup">
                <div className="popup-form">

                <div className="popup-form-title">
                    <i className="fas fa-plus-circle"></i>
                    <h2>Edit shift</h2>
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
                        <br></br>

                    <label for="end_time">End Time</label><br></br>
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
                        <br></br>

                    <textarea id="notes" placeholder="Notes"></textarea>
                    <br></br>

                    <button className="form_button edit" onClick={() => editHandler(this.props.editShift ,this.props.cancel, this.props.shiftData, this.props.empData)}>Edit</button>
                    <br></br>
                    <button className="form_button close" onClick={this.props.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}