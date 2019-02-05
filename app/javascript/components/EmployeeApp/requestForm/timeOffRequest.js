import React from 'react'
import dateFns from 'date-fns'


export default class TimeOffRequest extends React.Component {
    render() {
        const currentYear = dateFns.format(new Date(), 'YYYY');
        const fetchRequestTimeOff = this.props.fetchRequestTimeOff;

        function submitHandler(cb) {
            event.preventDefault();
            const reason = document.getElementById('reason').options[document.getElementById("reason").selectedIndex].value;
            const monthStart = document.getElementById('month-start').options[document.getElementById("month-start").selectedIndex].value;
            const monthEnd = document.getElementById('month-end').options[document.getElementById("month-end").selectedIndex].value;
            const dayStart = document.getElementById('day-start').options[document.getElementById("day-start").selectedIndex].value;
            const dayEnd = document.getElementById('day-end').options[document.getElementById("day-end").selectedIndex].value;
            //Todo//
            //Need to check date if it's after 2 weeks//

            if (parseInt(monthStart) + parseInt(dayStart) <= parseInt(monthEnd) + parseInt(dayEnd) && (reason !== "timeOff")) {
                fetchRequestTimeOff(reason, monthStart, dayStart, monthEnd, dayEnd, currentYear);
                confirm(`Request time off for ${monthStart}/${dayStart} - ${monthEnd}/${dayEnd} has been sent!`)
                cb();
            } else {
                confirm(`Please check your request time and reason`)
            }

        }

        return (

            <div className="popup">
                <div className="popup-form">

                    <div>

                    <div className="popup-form-title">
                        <i className="fas fa-calendar-check"></i>
                        <h2>Request Time Off</h2>
                    </div>

                        <label for="day">Reason</label>
                        <div className="styled-select">
                            <select id="reason">
                                <option value="timeOff">Select Reason</option>
                                <option value="sick">Sick Day</option>
                                <option value="vacation">Vacation</option>
                                <option value="family">Family Emergency</option>
                                <option value="other">Other..</option>
                            </select><br/><br/>
                        </div>

                        <label for="day">From</label>

                        <div className="request-month-day-container">

                                <div className="request-styled-select">
                                    <select id="month-start">
                                        <option value="">Month</option>
                                        <option value="1">Jan</option>
                                        <option value="2">Feb</option>
                                        <option value="3">Mar</option>
                                        <option value="4">Apr</option>
                                        <option value="5">May</option>
                                        <option value="6">Jun</option>
                                        <option value="7">Jul</option>
                                        <option value="8">Aug</option>
                                        <option value="9">Sep</option>
                                        <option value="10">Oct</option>
                                        <option value="11">Nov</option>
                                        <option value="12">Dec</option>
                                    </select>
                                </div>


                                <div className="request-styled-select">
                                    <select id="day-start">
                                        <option value="">Day</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                            <div className="request-current-year">{currentYear}</div>

                        </div>




                        <label for="day">To</label>

                        <div className="request-month-day-container">
                                <div className="request-styled-select">
                                    <select id="month-end">
                                        <option value="">Month</option>
                                        <option value="1">Jan</option>
                                        <option value="2">Feb</option>
                                        <option value="3">Mar</option>
                                        <option value="4">Apr</option>
                                        <option value="5">May</option>
                                        <option value="6">Jun</option>
                                        <option value="7">Jul</option>
                                        <option value="8">Aug</option>
                                        <option value="9">Sep</option>
                                        <option value="10">Oct</option>
                                        <option value="11">Nov</option>
                                        <option value="12">Dec</option>
                                    </select>
                                </div>

                                <label for="day"></label>
                                <div className="request-styled-select">

                                    <select id="day-end">
                                        <option value="">Day</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                            <div className="request-current-year">{currentYear}</div>
                        </div>

                        <div className="request-same-day-sentence">*Select same day to request one day off</div>





                        <button className="form_button request" onClick={() => submitHandler(this.props.closeHandler)}>Request</button>
                        <br></br>
                        <button className="form_button close" onClick={this.props.closeHandler}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}