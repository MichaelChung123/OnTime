import React from 'react'

export default class EmployeeAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = () => {
        event.preventDefault();

        
    }

    render() {
        return (
            <div>
                <div className="daily_back_button" onClick={() => this.props.backClick()}>
                    <i className="fas fa-arrow-alt-circle-left"></i>
                    Back
                </div>
                <h1>Availability</h1>
                <form onSubmit={this.handleSubmit}>
                    Monday:

                    Start
                    <select name="monStart">
                        <option value="mon1:00 AM">1:00 AM</option>
                        <option value="mon2:00 AM"> 2:00 AM</option>
                        <option value="mon3:00 AM"> 3:00 AM</option>
                        <option value="mon4:00 AM"> 4:00 AM</option>
                        <option value="mon5:00 AM"> 5:00 AM</option>
                        <option value="mon6:00 AM"> 6:00 AM</option>
                        <option value="mon7:00 AM"> 7:00 AM</option>
                        <option value="mon8:00 AM"> 8:00 AM</option>
                        <option value="mon9:00 AM"> 9:00 AM</option>
                        <option value="mon10:00 AM"> 10:00 AM</option>
                        <option value="mon11:00 AM"> 11:00 AM</option>
                        <option value="mon12:00 PM"> 12:00 PM</option>
                        <option value="mon1:00 PM"> 1:00 PM</option>
                        <option value="mon2:00 PM"> 2:00 PM</option>
                        <option value="mon3:00 PM"> 3:00 PM</option>
                        <option value="mon4:00 PM"> 4:00 PM</option>
                        <option value="mon5:00 PM"> 5:00 PM</option>
                        <option value="mon6:00 PM"> 6:00 PM</option>
                        <option value="mon7:00 PM"> 7:00 PM</option>
                        <option value="mon8:00 PM"> 8:00 PM</option>
                        <option value="mon9:00 PM"> 9:00 PM</option>
                        <option value="mon10:00 PM"> 10:00 PM</option>
                        <option value="mon11:00 PM"> 11:00 PM</option>
                        <option value="mon12:00 AM"> 12:00 AM</option>
                    </select>

                    End
                    <select name="monEnd">
                        <option value="mon1:00 AM">1:00 AM</option>
                        <option value="mon2:00 AM"> 2:00 AM</option>
                        <option value="mon3:00 AM"> 3:00 AM</option>
                        <option value="mon4:00 AM"> 4:00 AM</option>
                        <option value="mon5:00 AM"> 5:00 AM</option>
                        <option value="mon6:00 AM"> 6:00 AM</option>
                        <option value="mon7:00 AM"> 7:00 AM</option>
                        <option value="mon8:00 AM"> 8:00 AM</option>
                        <option value="mon9:00 AM"> 9:00 AM</option>
                        <option value="mon10:00 AM"> 10:00 AM</option>
                        <option value="mon11:00 AM"> 11:00 AM</option>
                        <option value="mon12:00 PM"> 12:00 PM</option>
                        <option value="mon1:00 PM"> 1:00 PM</option>
                        <option value="mon2:00 PM"> 2:00 PM</option>
                        <option value="mon3:00 PM"> 3:00 PM</option>
                        <option value="mon4:00 PM"> 4:00 PM</option>
                        <option value="mon5:00 PM"> 5:00 PM</option>
                        <option value="mon6:00 PM"> 6:00 PM</option>
                        <option value="mon7:00 PM"> 7:00 PM</option>
                        <option value="mon8:00 PM"> 8:00 PM</option>
                        <option value="mon9:00 PM"> 9:00 PM</option>
                        <option value="mon10:00 PM"> 10:00 PM</option>
                        <option value="mon11:00 PM"> 11:00 PM</option>
                        <option value="mon12:00 AM"> 12:00 AM</option>
                    </select>

                    No Preference <input type="checkbox" id="monPref" />

                    <br />
                    <br />

                    Tuesday:

                    Start
                    <select name="tuesStart">
                        <option value="tues1:00 AM">1:00 AM</option>
                        <option value="tues2:00 AM"> 2:00 AM</option>
                        <option value="tues3:00 AM"> 3:00 AM</option>
                        <option value="tues4:00 AM"> 4:00 AM</option>
                        <option value="tues5:00 AM"> 5:00 AM</option>
                        <option value="tues6:00 AM"> 6:00 AM</option>
                        <option value="tues7:00 AM"> 7:00 AM</option>
                        <option value="tues8:00 AM"> 8:00 AM</option>
                        <option value="tues9:00 AM"> 9:00 AM</option>
                        <option value="tues10:00 AM"> 10:00 AM</option>
                        <option value="tues11:00 AM"> 11:00 AM</option>
                        <option value="tues12:00 PM"> 12:00 PM</option>
                        <option value="tues1:00 PM"> 1:00 PM</option>
                        <option value="tues2:00 PM"> 2:00 PM</option>
                        <option value="tues3:00 PM"> 3:00 PM</option>
                        <option value="tues4:00 PM"> 4:00 PM</option>
                        <option value="tues5:00 PM"> 5:00 PM</option>
                        <option value="tues6:00 PM"> 6:00 PM</option>
                        <option value="tues7:00 PM"> 7:00 PM</option>
                        <option value="tues8:00 PM"> 8:00 PM</option>
                        <option value="tues9:00 PM"> 9:00 PM</option>
                        <option value="tues10:00 PM"> 10:00 PM</option>
                        <option value="tues11:00 PM"> 11:00 PM</option>
                        <option value="tues12:00 AM"> 12:00 AM</option>
                    </select>

                    End
                    <select name="tuesEnd">
                        <option value="tues1:00 AM">1:00 AM</option>
                        <option value="tues2:00 AM"> 2:00 AM</option>
                        <option value="tues3:00 AM"> 3:00 AM</option>
                        <option value="tues4:00 AM"> 4:00 AM</option>
                        <option value="tues5:00 AM"> 5:00 AM</option>
                        <option value="tues6:00 AM"> 6:00 AM</option>
                        <option value="tues7:00 AM"> 7:00 AM</option>
                        <option value="tues8:00 AM"> 8:00 AM</option>
                        <option value="tues9:00 AM"> 9:00 AM</option>
                        <option value="tues10:00 AM"> 10:00 AM</option>
                        <option value="tues11:00 AM"> 11:00 AM</option>
                        <option value="tues12:00 PM"> 12:00 PM</option>
                        <option value="tues1:00 PM"> 1:00 PM</option>
                        <option value="tues2:00 PM"> 2:00 PM</option>
                        <option value="tues3:00 PM"> 3:00 PM</option>
                        <option value="tues4:00 PM"> 4:00 PM</option>
                        <option value="tues5:00 PM"> 5:00 PM</option>
                        <option value="tues6:00 PM"> 6:00 PM</option>
                        <option value="tues7:00 PM"> 7:00 PM</option>
                        <option value="tues8:00 PM"> 8:00 PM</option>
                        <option value="tues9:00 PM"> 9:00 PM</option>
                        <option value="tues10:00 PM"> 10:00 PM</option>
                        <option value="tues11:00 PM"> 11:00 PM</option>
                        <option value="tues12:00 AM"> 12:00 AM</option>
                    </select>

                    No Preference <input type="checkbox" id="tuesPref" />


                    <br />
                    <br />


                    Wednesday:

                    Start
                    <select name="wedStart">
                        <option value="wed1:00 AM">1:00 AM</option>
                        <option value="wed2:00 AM"> 2:00 AM</option>
                        <option value="wed3:00 AM"> 3:00 AM</option>
                        <option value="wed4:00 AM"> 4:00 AM</option>
                        <option value="wed5:00 AM"> 5:00 AM</option>
                        <option value="wed6:00 AM"> 6:00 AM</option>
                        <option value="wed7:00 AM"> 7:00 AM</option>
                        <option value="wed8:00 AM"> 8:00 AM</option>
                        <option value="wed9:00 AM"> 9:00 AM</option>
                        <option value="wed10:00 AM"> 10:00 AM</option>
                        <option value="wed11:00 AM"> 11:00 AM</option>
                        <option value="wed12:00 PM"> 12:00 PM</option>
                        <option value="wed1:00 PM"> 1:00 PM</option>
                        <option value="wed2:00 PM"> 2:00 PM</option>
                        <option value="wed3:00 PM"> 3:00 PM</option>
                        <option value="wed4:00 PM"> 4:00 PM</option>
                        <option value="wed5:00 PM"> 5:00 PM</option>
                        <option value="wed6:00 PM"> 6:00 PM</option>
                        <option value="wed7:00 PM"> 7:00 PM</option>
                        <option value="wed8:00 PM"> 8:00 PM</option>
                        <option value="wed9:00 PM"> 9:00 PM</option>
                        <option value="wed10:00 PM"> 10:00 PM</option>
                        <option value="wed11:00 PM"> 11:00 PM</option>
                        <option value="wed12:00 AM"> 12:00 AM</option>
                    </select>

                    End
                    <select name="wedEnd">
                        <option value="wed1:00 AM">1:00 AM</option>
                        <option value="wed2:00 AM"> 2:00 AM</option>
                        <option value="wed3:00 AM"> 3:00 AM</option>
                        <option value="wed4:00 AM"> 4:00 AM</option>
                        <option value="wed5:00 AM"> 5:00 AM</option>
                        <option value="wed6:00 AM"> 6:00 AM</option>
                        <option value="wed7:00 AM"> 7:00 AM</option>
                        <option value="wed8:00 AM"> 8:00 AM</option>
                        <option value="wed9:00 AM"> 9:00 AM</option>
                        <option value="wed10:00 AM"> 10:00 AM</option>
                        <option value="wed11:00 AM"> 11:00 AM</option>
                        <option value="wed12:00 PM"> 12:00 PM</option>
                        <option value="wed1:00 PM"> 1:00 PM</option>
                        <option value="wed2:00 PM"> 2:00 PM</option>
                        <option value="wed3:00 PM"> 3:00 PM</option>
                        <option value="wed4:00 PM"> 4:00 PM</option>
                        <option value="wed5:00 PM"> 5:00 PM</option>
                        <option value="wed6:00 PM"> 6:00 PM</option>
                        <option value="wed7:00 PM"> 7:00 PM</option>
                        <option value="wed8:00 PM"> 8:00 PM</option>
                        <option value="wed9:00 PM"> 9:00 PM</option>
                        <option value="wed10:00 PM"> 10:00 PM</option>
                        <option value="wed11:00 PM"> 11:00 PM</option>
                        <option value="wed12:00 AM"> 12:00 AM</option>
                    </select>

                    No Preference <input type="checkbox" id="wedPref" />

                    <br />
                    <br />

                    Thursday:

                    Start
                    <select name="thursStart">
                        <option value="thurs1:00 AM">1:00 AM</option>
                        <option value="thurs2:00 AM"> 2:00 AM</option>
                        <option value="thurs3:00 AM"> 3:00 AM</option>
                        <option value="thurs4:00 AM"> 4:00 AM</option>
                        <option value="thurs5:00 AM"> 5:00 AM</option>
                        <option value="thurs6:00 AM"> 6:00 AM</option>
                        <option value="thurs7:00 AM"> 7:00 AM</option>
                        <option value="thurs8:00 AM"> 8:00 AM</option>
                        <option value="thurs9:00 AM"> 9:00 AM</option>
                        <option value="thurs10:00 AM"> 10:00 AM</option>
                        <option value="thurs11:00 AM"> 11:00 AM</option>
                        <option value="thurs12:00 PM"> 12:00 PM</option>
                        <option value="thurs1:00 PM"> 1:00 PM</option>
                        <option value="thurs2:00 PM"> 2:00 PM</option>
                        <option value="thurs3:00 PM"> 3:00 PM</option>
                        <option value="thurs4:00 PM"> 4:00 PM</option>
                        <option value="thurs5:00 PM"> 5:00 PM</option>
                        <option value="thurs6:00 PM"> 6:00 PM</option>
                        <option value="thurs7:00 PM"> 7:00 PM</option>
                        <option value="thurs8:00 PM"> 8:00 PM</option>
                        <option value="thurs9:00 PM"> 9:00 PM</option>
                        <option value="thurs10:00 PM"> 10:00 PM</option>
                        <option value="thurs11:00 PM"> 11:00 PM</option>
                        <option value="thurs12:00 AM"> 12:00 AM</option>
                    </select>

                    End
                    <select name="thursEnd">
                        <option value="thurs1:00 AM">1:00 AM</option>
                        <option value="thurs2:00 AM"> 2:00 AM</option>
                        <option value="thurs3:00 AM"> 3:00 AM</option>
                        <option value="thurs4:00 AM"> 4:00 AM</option>
                        <option value="thurs5:00 AM"> 5:00 AM</option>
                        <option value="thurs6:00 AM"> 6:00 AM</option>
                        <option value="thurs7:00 AM"> 7:00 AM</option>
                        <option value="thurs8:00 AM"> 8:00 AM</option>
                        <option value="thurs9:00 AM"> 9:00 AM</option>
                        <option value="thurs10:00 AM"> 10:00 AM</option>
                        <option value="thurs11:00 AM"> 11:00 AM</option>
                        <option value="thurs12:00 PM"> 12:00 PM</option>
                        <option value="thurs1:00 PM"> 1:00 PM</option>
                        <option value="thurs2:00 PM"> 2:00 PM</option>
                        <option value="thurs3:00 PM"> 3:00 PM</option>
                        <option value="thurs4:00 PM"> 4:00 PM</option>
                        <option value="thurs5:00 PM"> 5:00 PM</option>
                        <option value="thurs6:00 PM"> 6:00 PM</option>
                        <option value="thurs7:00 PM"> 7:00 PM</option>
                        <option value="thurs8:00 PM"> 8:00 PM</option>
                        <option value="thurs9:00 PM"> 9:00 PM</option>
                        <option value="thurs10:00 PM"> 10:00 PM</option>
                        <option value="thurs11:00 PM"> 11:00 PM</option>
                        <option value="thurs12:00 AM"> 12:00 AM</option>
                    </select>

                    No Preference <input type="checkbox" id="thursPref" />

                    <br />
                    <br />

                    Friday:

                    Start
                    <select name="friStart">
                        <option value="fri1:00 AM">1:00 AM</option>
                        <option value="fri2:00 AM"> 2:00 AM</option>
                        <option value="fri3:00 AM"> 3:00 AM</option>
                        <option value="fri4:00 AM"> 4:00 AM</option>
                        <option value="fri5:00 AM"> 5:00 AM</option>
                        <option value="fri6:00 AM"> 6:00 AM</option>
                        <option value="fri7:00 AM"> 7:00 AM</option>
                        <option value="fri8:00 AM"> 8:00 AM</option>
                        <option value="fri9:00 AM"> 9:00 AM</option>
                        <option value="fri10:00 AM"> 10:00 AM</option>
                        <option value="fri11:00 AM"> 11:00 AM</option>
                        <option value="fri12:00 PM"> 12:00 PM</option>
                        <option value="fri1:00 PM"> 1:00 PM</option>
                        <option value="fri2:00 PM"> 2:00 PM</option>
                        <option value="fri3:00 PM"> 3:00 PM</option>
                        <option value="fri4:00 PM"> 4:00 PM</option>
                        <option value="fri5:00 PM"> 5:00 PM</option>
                        <option value="fri6:00 PM"> 6:00 PM</option>
                        <option value="fri7:00 PM"> 7:00 PM</option>
                        <option value="fri8:00 PM"> 8:00 PM</option>
                        <option value="fri9:00 PM"> 9:00 PM</option>
                        <option value="fri10:00 PM"> 10:00 PM</option>
                        <option value="fri11:00 PM"> 11:00 PM</option>
                        <option value="fri12:00 AM"> 12:00 AM</option>
                    </select>

                    End
                    <select name="friEnd">
                        <option value="fri1:00 AM">1:00 AM</option>
                        <option value="fri2:00 AM"> 2:00 AM</option>
                        <option value="fri3:00 AM"> 3:00 AM</option>
                        <option value="fri4:00 AM"> 4:00 AM</option>
                        <option value="fri5:00 AM"> 5:00 AM</option>
                        <option value="fri6:00 AM"> 6:00 AM</option>
                        <option value="fri7:00 AM"> 7:00 AM</option>
                        <option value="fri8:00 AM"> 8:00 AM</option>
                        <option value="fri9:00 AM"> 9:00 AM</option>
                        <option value="fri10:00 AM"> 10:00 AM</option>
                        <option value="fri11:00 AM"> 11:00 AM</option>
                        <option value="fri12:00 PM"> 12:00 PM</option>
                        <option value="fri1:00 PM"> 1:00 PM</option>
                        <option value="fri2:00 PM"> 2:00 PM</option>
                        <option value="fri3:00 PM"> 3:00 PM</option>
                        <option value="fri4:00 PM"> 4:00 PM</option>
                        <option value="fri5:00 PM"> 5:00 PM</option>
                        <option value="fri6:00 PM"> 6:00 PM</option>
                        <option value="fri7:00 PM"> 7:00 PM</option>
                        <option value="fri8:00 PM"> 8:00 PM</option>
                        <option value="fri9:00 PM"> 9:00 PM</option>
                        <option value="fri10:00 PM"> 10:00 PM</option>
                        <option value="fri11:00 PM"> 11:00 PM</option>
                        <option value="fri12:00 AM"> 12:00 AM</option>
                    </select>

                    No Preference <input type="checkbox" id="friPref" />

                    <br />
                    <br />

                    Saturday:

                    Start
                    <select name="satStart">
                        <option value="sat1:00 AM">1:00 AM</option>
                        <option value="sat2:00 AM"> 2:00 AM</option>
                        <option value="sat3:00 AM"> 3:00 AM</option>
                        <option value="sat4:00 AM"> 4:00 AM</option>
                        <option value="sat5:00 AM"> 5:00 AM</option>
                        <option value="sat6:00 AM"> 6:00 AM</option>
                        <option value="sat7:00 AM"> 7:00 AM</option>
                        <option value="sat8:00 AM"> 8:00 AM</option>
                        <option value="sat9:00 AM"> 9:00 AM</option>
                        <option value="sat10:00 AM"> 10:00 AM</option>
                        <option value="sat11:00 AM"> 11:00 AM</option>
                        <option value="sat12:00 PM"> 12:00 PM</option>
                        <option value="sat1:00 PM"> 1:00 PM</option>
                        <option value="sat2:00 PM"> 2:00 PM</option>
                        <option value="sat3:00 PM"> 3:00 PM</option>
                        <option value="sat4:00 PM"> 4:00 PM</option>
                        <option value="sat5:00 PM"> 5:00 PM</option>
                        <option value="sat6:00 PM"> 6:00 PM</option>
                        <option value="sat7:00 PM"> 7:00 PM</option>
                        <option value="sat8:00 PM"> 8:00 PM</option>
                        <option value="sat9:00 PM"> 9:00 PM</option>
                        <option value="sat10:00 PM"> 10:00 PM</option>
                        <option value="sat11:00 PM"> 11:00 PM</option>
                        <option value="sat12:00 AM"> 12:00 AM</option>
                    </select>

                    End
                    <select name="satEnd">
                        <option value="sat1:00 AM">1:00 AM</option>
                        <option value="sat2:00 AM"> 2:00 AM</option>
                        <option value="sat3:00 AM"> 3:00 AM</option>
                        <option value="sat4:00 AM"> 4:00 AM</option>
                        <option value="sat5:00 AM"> 5:00 AM</option>
                        <option value="sat6:00 AM"> 6:00 AM</option>
                        <option value="sat7:00 AM"> 7:00 AM</option>
                        <option value="sat8:00 AM"> 8:00 AM</option>
                        <option value="sat9:00 AM"> 9:00 AM</option>
                        <option value="sat10:00 AM"> 10:00 AM</option>
                        <option value="sat11:00 AM"> 11:00 AM</option>
                        <option value="sat12:00 PM"> 12:00 PM</option>
                        <option value="sat1:00 PM"> 1:00 PM</option>
                        <option value="sat2:00 PM"> 2:00 PM</option>
                        <option value="sat3:00 PM"> 3:00 PM</option>
                        <option value="sat4:00 PM"> 4:00 PM</option>
                        <option value="sat5:00 PM"> 5:00 PM</option>
                        <option value="sat6:00 PM"> 6:00 PM</option>
                        <option value="sat7:00 PM"> 7:00 PM</option>
                        <option value="sat8:00 PM"> 8:00 PM</option>
                        <option value="sat9:00 PM"> 9:00 PM</option>
                        <option value="sat10:00 PM"> 10:00 PM</option>
                        <option value="sat11:00 PM"> 11:00 PM</option>
                        <option value="sat12:00 AM"> 12:00 AM</option>
                    </select>

                    No Preference <input type="checkbox" id="satPref" />


                    <br />
                    <br />

                    Sunday: 

                    Start
                    <select name="sunStart">
                        <option value="sun1:00 AM">1:00 AM</option>
                        <option value="sun2:00 AM"> 2:00 AM</option>
                        <option value="sun3:00 AM"> 3:00 AM</option>
                        <option value="sun4:00 AM"> 4:00 AM</option>
                        <option value="sun5:00 AM"> 5:00 AM</option>
                        <option value="sun6:00 AM"> 6:00 AM</option>
                        <option value="sun7:00 AM"> 7:00 AM</option>
                        <option value="sun8:00 AM"> 8:00 AM</option>
                        <option value="sun9:00 AM"> 9:00 AM</option>
                        <option value="sun10:00 AM"> 10:00 AM</option>
                        <option value="sun11:00 AM"> 11:00 AM</option>
                        <option value="sun12:00 PM"> 12:00 PM</option>
                        <option value="sun1:00 PM"> 1:00 PM</option>
                        <option value="sun2:00 PM"> 2:00 PM</option>
                        <option value="sun3:00 PM"> 3:00 PM</option>
                        <option value="sun4:00 PM"> 4:00 PM</option>
                        <option value="sun5:00 PM"> 5:00 PM</option>
                        <option value="sun6:00 PM"> 6:00 PM</option>
                        <option value="sun7:00 PM"> 7:00 PM</option>
                        <option value="sun8:00 PM"> 8:00 PM</option>
                        <option value="sun9:00 PM"> 9:00 PM</option>
                        <option value="sun10:00 PM"> 10:00 PM</option>
                        <option value="sun11:00 PM"> 11:00 PM</option>
                        <option value="sun12:00 AM"> 12:00 AM</option>
                    </select>

                    End
                    <select name="sunEnd">
                        <option value="sun1:00 AM">1:00 AM</option>
                        <option value="sun2:00 AM"> 2:00 AM</option>
                        <option value="sun3:00 AM"> 3:00 AM</option>
                        <option value="sun4:00 AM"> 4:00 AM</option>
                        <option value="sun5:00 AM"> 5:00 AM</option>
                        <option value="sun6:00 AM"> 6:00 AM</option>
                        <option value="sun7:00 AM"> 7:00 AM</option>
                        <option value="sun8:00 AM"> 8:00 AM</option>
                        <option value="sun9:00 AM"> 9:00 AM</option>
                        <option value="sun10:00 AM"> 10:00 AM</option>
                        <option value="sun11:00 AM"> 11:00 AM</option>
                        <option value="sun12:00 PM"> 12:00 PM</option>
                        <option value="sun1:00 PM"> 1:00 PM</option>
                        <option value="sun2:00 PM"> 2:00 PM</option>
                        <option value="sun3:00 PM"> 3:00 PM</option>
                        <option value="sun4:00 PM"> 4:00 PM</option>
                        <option value="sun5:00 PM"> 5:00 PM</option>
                        <option value="sun6:00 PM"> 6:00 PM</option>
                        <option value="sun7:00 PM"> 7:00 PM</option>
                        <option value="sun8:00 PM"> 8:00 PM</option>
                        <option value="sun9:00 PM"> 9:00 PM</option>
                        <option value="sun10:00 PM"> 10:00 PM</option>
                        <option value="sun11:00 PM"> 11:00 PM</option>
                        <option value="sun12:00 AM"> 12:00 AM</option>
                    </select>

                    No Preference <input type="checkbox" id="sunPref" />

                    <input className="edit_employee_submit_button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}