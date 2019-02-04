import React from 'react'

export default class EmployeeAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monStart: "mon9:00 AM",
            monEnd: "mon9:00 PM",
            tueStart: "tue9:00 AM",
            tueEnd: "tue9:00 PM",
            wedStart: "wed9:00 AM",
            wedEnd: "wed9:00 PM",
            thuStart: "thu9:00 AM",
            thuEnd: "thu9:00 PM",
            friStart: "fri9:00 AM",
            friEnd: "fri9:00 PM",
            satStart: "sat9:00 AM",
            satEnd: "sat9:00 PM",
            sunStart: "sun9:00 AM",
            sunEnd: "sun9:00 PM"
            // monStartLoaded: false,
            // monEndLoaded: false,
            // tueStartLoaded: false,
            // tueEndLoaded: false,
            // wedStartLoaded: false,
            // wedEndLoaded: false,
            // thuStartLoaded: false,
            // thuEndLoaded: false,
            // friStartLoaded: false,
            // friEndLoaded: false,
            // satStartLoaded: false,
            // satEndLoaded: false,
            // sunStartLoaded: false,
            // sunEndLoaded: false
        }

    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    }

    formatTime = (timeStr) => {
        if (timeStr[timeStr.length - 2] === "A") {
            return parseInt(timeStr.split(":")[0].slice(3));
        } 
        else if (timeStr[timeStr.length - 2] === "P") {
            if(parseInt(timeStr.split(":")[0].slice(3)) === 12) {
                return 12;
            }
            return parseInt(timeStr.split(":")[0].slice(3)) + 12;
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let monStart = this.formatTime(this.state.monStart);
        let tueStart = this.formatTime(this.state.tueStart);
        let wedStart = this.formatTime(this.state.wedStart);
        let thuStart = this.formatTime(this.state.thuStart);
        let friStart = this.formatTime(this.state.friStart);
        let satStart = this.formatTime(this.state.satStart);
        let sunStart = this.formatTime(this.state.sunStart);

        let monEnd = this.formatTime(this.state.monEnd);
        let tueEnd = this.formatTime(this.state.tueEnd);
        let wedEnd = this.formatTime(this.state.wedEnd);
        let thuEnd = this.formatTime(this.state.thuEnd);
        let friEnd = this.formatTime(this.state.friEnd);
        let satEnd = this.formatTime(this.state.satEnd);
        let sunEnd = this.formatTime(this.state.sunEnd);

        let data = {
            employee_id: 1,
            monStart: monStart,
            monEnd: monEnd,
            tueStart: tueStart,
            tueEnd: tueEnd,
            wedStart: wedStart,
            wedEnd: wedEnd,
            thuStart: thuStart,
            thuEnd: thuEnd,
            friStart: friStart,
            friEnd: friEnd,
            satStart: satStart,
            satEnd: satEnd,
            sunStart: sunStart,
            sunEnd: sunEnd
        }

        fetch('/api/availability', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    setAvail = () => {
        for (let avail of this.props.availabilities) {
            if (avail.id === 1) {
                if (avail.day === "Monday") {
                    if (avail.start_time <= 12) {
                        this.setState({ monStart: `mon${avail.start_time}:00 AM` });
                    } else {
                        this.setState({ monStart: `mon${avail.start_time - 12}:00 PM` });
                    }

                    if (avail.end_time <= 12) {
                        this.setState({ monEnd: `mon${avail.end_time}:00 AM` });
                    } else {
                        this.setState({ monEnd: `mon${avail.end_time - 12}:00 PM` });
                    }
                }
                else if (avail.day === "tueday") {
                    if (avail.start_time <= 12) {
                        this.setState({ tueStart: `tue${avail.start_time}:00 AM` });
                    } else {
                        this.setState({ tueStart: `tue${avail.start_time - 12}:00 PM` });
                    }

                    if (avail.end_time <= 12) {
                        this.setState({ tueEnd: `tue${avail.end_time}:00 AM` });
                    } else {
                        this.setState({ tueEnd: `tue${avail.end_time - 12}:00 PM` });
                    }
                }
                else if (avail.day === "Wednesday") {
                    if (avail.start_time <= 12) {
                        this.setState({ wedStart: `wed${avail.start_time}:00 AM` });
                    } else {
                        this.setState({ wedStart: `wed${avail.start_time - 12}:00 PM` });
                    }

                    if (avail.end_time <= 12) {
                        this.setState({ wedEnd: `wed${avail.end_time}:00 AM` });
                    } else {
                        this.setState({ wedEnd: `wed${avail.end_time - 12}:00 PM` });
                    }
                }
                else if (avail.day === "thuday") {
                    if (avail.start_time <= 12) {
                        this.setState({ thuStart: `thu${avail.start_time}:00 AM` });
                    } else {
                        this.setState({ thuStart: `thu${avail.start_time - 12}:00 PM` });
                    }

                    if (avail.end_time <= 12) {
                        this.setState({ thuEnd: `thu${avail.end_time}:00 AM` });
                    } else {
                        this.setState({ thuEnd: `thu${avail.end_time - 12}:00 PM` });
                    }
                }
                else if (avail.day === "Friday") {
                    if (avail.start_time <= 12) {
                        this.setState({ friStart: `fri${avail.start_time}:00 AM` });
                    } else {
                        this.setState({ friStart: `fri${avail.start_time - 12}:00 PM` });
                    }

                    if (avail.end_time <= 12) {
                        this.setState({ friEnd: `fri${avail.end_time}:00 AM` });
                    } else {
                        this.setState({ friEnd: `fri${avail.end_time - 12}:00 PM` });
                    }
                }
                else if (avail.day === "Saturday") {
                    if (avail.start_time <= 12) {
                        this.setState({ satStart: `sat${avail.start_time}:00 AM` });
                    } else {
                        this.setState({ satStart: `sat${avail.start_time - 12}:00 PM` });
                    }

                    if (avail.end_time <= 12) {
                        this.setState({ satEnd: `sat${avail.end_time}:00 AM` });
                    } else {
                        this.setState({ satEnd: `sat${avail.end_time - 12}:00 PM` });
                    }
                }
                else if (avail.day === "Sunday") {
                    if (avail.start_time <= 12) {
                        this.setState({ sunStart: `sun${avail.start_time}:00 AM` });
                    } else {
                        this.setState({ sunStart: `sun${avail.start_time - 12}:00 PM` });
                    }

                    if (avail.end_time <= 12) {
                        this.setState({ sunEnd: `sun${avail.end_time}:00 AM` });
                    } else {
                        this.setState({ sunEnd: `sun${avail.end_time - 12}:00 PM` });
                    }
                }
            }
        }
    }

    componentDidMount() {
        this.setAvail();
    }

    render() {
        return (
            <div className="popup">
                <div className="popup-form">


                    <h1>Availability</h1>
                    <form onSubmit={this.handleSubmit}>
                        Monday:

                        Start
                    <select name="monStart" value={this.state.monStart} onChange={(event) => this.setState({ monStart: event.target.value, monStartLoaded: true })}>
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
                    <select name="monEnd" value={this.state.monEnd} onChange={(event) => this.setState({ monEnd: event.target.value, monEndLoaded: true })}>
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

                        <br />
                        <br />

                        Tuesday:

                        Start
                    <select name="tueStart" value={this.state.tueStart} onChange={(event) => this.setState({ tueStart: event.target.value, tueStartLoaded: true })}>
                            <option value="tue1:00 AM">1:00 AM</option>
                            <option value="tue2:00 AM"> 2:00 AM</option>
                            <option value="tue3:00 AM"> 3:00 AM</option>
                            <option value="tue4:00 AM"> 4:00 AM</option>
                            <option value="tue5:00 AM"> 5:00 AM</option>
                            <option value="tue6:00 AM"> 6:00 AM</option>
                            <option value="tue7:00 AM"> 7:00 AM</option>
                            <option value="tue8:00 AM"> 8:00 AM</option>
                            <option value="tue9:00 AM"> 9:00 AM</option>
                            <option value="tue10:00 AM"> 10:00 AM</option>
                            <option value="tue11:00 AM"> 11:00 AM</option>
                            <option value="tue12:00 PM"> 12:00 PM</option>
                            <option value="tue1:00 PM"> 1:00 PM</option>
                            <option value="tue2:00 PM"> 2:00 PM</option>
                            <option value="tue3:00 PM"> 3:00 PM</option>
                            <option value="tue4:00 PM"> 4:00 PM</option>
                            <option value="tue5:00 PM"> 5:00 PM</option>
                            <option value="tue6:00 PM"> 6:00 PM</option>
                            <option value="tue7:00 PM"> 7:00 PM</option>
                            <option value="tue8:00 PM"> 8:00 PM</option>
                            <option value="tue9:00 PM"> 9:00 PM</option>
                            <option value="tue10:00 PM"> 10:00 PM</option>
                            <option value="tue11:00 PM"> 11:00 PM</option>
                            <option value="tue12:00 AM"> 12:00 AM</option>
                        </select>

                        End
                    <select name="tueEnd" value={this.state.tueEnd} onChange={(event) => this.setState({ tueEnd: event.target.value, tueEndLoaded: true })}>
                            <option value="tue1:00 AM">1:00 AM</option>
                            <option value="tue2:00 AM"> 2:00 AM</option>
                            <option value="tue3:00 AM"> 3:00 AM</option>
                            <option value="tue4:00 AM"> 4:00 AM</option>
                            <option value="tue5:00 AM"> 5:00 AM</option>
                            <option value="tue6:00 AM"> 6:00 AM</option>
                            <option value="tue7:00 AM"> 7:00 AM</option>
                            <option value="tue8:00 AM"> 8:00 AM</option>
                            <option value="tue9:00 AM"> 9:00 AM</option>
                            <option value="tue10:00 AM"> 10:00 AM</option>
                            <option value="tue11:00 AM"> 11:00 AM</option>
                            <option value="tue12:00 PM"> 12:00 PM</option>
                            <option value="tue1:00 PM"> 1:00 PM</option>
                            <option value="tue2:00 PM"> 2:00 PM</option>
                            <option value="tue3:00 PM"> 3:00 PM</option>
                            <option value="tue4:00 PM"> 4:00 PM</option>
                            <option value="tue5:00 PM"> 5:00 PM</option>
                            <option value="tue6:00 PM"> 6:00 PM</option>
                            <option value="tue7:00 PM"> 7:00 PM</option>
                            <option value="tue8:00 PM"> 8:00 PM</option>
                            <option value="tue9:00 PM"> 9:00 PM</option>
                            <option value="tue10:00 PM"> 10:00 PM</option>
                            <option value="tue11:00 PM"> 11:00 PM</option>
                            <option value="tue12:00 AM"> 12:00 AM</option>
                        </select>


                        <br />
                        <br />


                        Wednesday:

                        Start
                    <select name="wedStart" value={this.state.wedStart} onChange={(event) => this.setState({ wedStart: event.target.value, wedStartLoaded: true })}>
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
                    <select name="wedEnd" value={this.state.wedEnd} onChange={(event) => this.setState({ wedEnd: event.target.value, wedEndLoaded: true })}>
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

                        <br />
                        <br />

                        Thursday:

                        Start
                    <select name="thuStart" value={this.state.thuStart} onChange={(event) => this.setState({ thuStart: event.target.value, thuStartLoaded: true })}>
                            <option value="thu1:00 AM">1:00 AM</option>
                            <option value="thu2:00 AM"> 2:00 AM</option>
                            <option value="thu3:00 AM"> 3:00 AM</option>
                            <option value="thu4:00 AM"> 4:00 AM</option>
                            <option value="thu5:00 AM"> 5:00 AM</option>
                            <option value="thu6:00 AM"> 6:00 AM</option>
                            <option value="thu7:00 AM"> 7:00 AM</option>
                            <option value="thu8:00 AM"> 8:00 AM</option>
                            <option value="thu9:00 AM"> 9:00 AM</option>
                            <option value="thu10:00 AM"> 10:00 AM</option>
                            <option value="thu11:00 AM"> 11:00 AM</option>
                            <option value="thu12:00 PM"> 12:00 PM</option>
                            <option value="thu1:00 PM"> 1:00 PM</option>
                            <option value="thu2:00 PM"> 2:00 PM</option>
                            <option value="thu3:00 PM"> 3:00 PM</option>
                            <option value="thu4:00 PM"> 4:00 PM</option>
                            <option value="thu5:00 PM"> 5:00 PM</option>
                            <option value="thu6:00 PM"> 6:00 PM</option>
                            <option value="thu7:00 PM"> 7:00 PM</option>
                            <option value="thu8:00 PM"> 8:00 PM</option>
                            <option value="thu9:00 PM"> 9:00 PM</option>
                            <option value="thu10:00 PM"> 10:00 PM</option>
                            <option value="thu11:00 PM"> 11:00 PM</option>
                            <option value="thu12:00 AM"> 12:00 AM</option>
                        </select>

                        End
                    <select name="thuEnd" value={this.state.thuEnd} onChange={(event) => this.setState({ thuEnd: event.target.value, thuEndLoaded: true })}>
                            <option value="thu1:00 AM">1:00 AM</option>
                            <option value="thu2:00 AM"> 2:00 AM</option>
                            <option value="thu3:00 AM"> 3:00 AM</option>
                            <option value="thu4:00 AM"> 4:00 AM</option>
                            <option value="thu5:00 AM"> 5:00 AM</option>
                            <option value="thu6:00 AM"> 6:00 AM</option>
                            <option value="thu7:00 AM"> 7:00 AM</option>
                            <option value="thu8:00 AM"> 8:00 AM</option>
                            <option value="thu9:00 AM"> 9:00 AM</option>
                            <option value="thu10:00 AM"> 10:00 AM</option>
                            <option value="thu11:00 AM"> 11:00 AM</option>
                            <option value="thu12:00 PM"> 12:00 PM</option>
                            <option value="thu1:00 PM"> 1:00 PM</option>
                            <option value="thu2:00 PM"> 2:00 PM</option>
                            <option value="thu3:00 PM"> 3:00 PM</option>
                            <option value="thu4:00 PM"> 4:00 PM</option>
                            <option value="thu5:00 PM"> 5:00 PM</option>
                            <option value="thu6:00 PM"> 6:00 PM</option>
                            <option value="thu7:00 PM"> 7:00 PM</option>
                            <option value="thu8:00 PM"> 8:00 PM</option>
                            <option value="thu9:00 PM"> 9:00 PM</option>
                            <option value="thu10:00 PM"> 10:00 PM</option>
                            <option value="thu11:00 PM"> 11:00 PM</option>
                            <option value="thu12:00 AM"> 12:00 AM</option>
                        </select>

                        <br />
                        <br />

                        Friday:

                        Start
                    <select name="friStart" value={this.state.friStart} onChange={(event) => this.setState({ friStart: event.target.value, friStartLoaded: true })}>
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
                    <select name="friEnd" value={this.state.friEnd} onChange={(event) => this.setState({ friEnd: event.target.value, friEndLoaded: true })}>
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

                        <br />
                        <br />

                        Saturday:

                        Start
                    <select name="satStart" value={this.state.satStart} onChange={(event) => this.setState({ satStart: event.target.value, satStartLoaded: true })}>
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
                    <select name="satEnd" value={this.state.satEnd} onChange={(event) => this.setState({ satEnd: event.target.value, satEndLoaded: true })}>
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


                        <br />
                        <br />

                        Sunday:

                        Start
                    <select name="sunStart" value={this.state.sunStart} onChange={(event) => this.setState({ sunStart: event.target.value, sunStartLoaded: true })}>
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
                    <select name="sunEnd" value={this.state.sunEnd} onChange={(event) => this.setState({ sunEnd: event.target.value, sunEndLoaded: true })}>
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

                        <input className="edit_employee_submit_button" type="submit" value="Submit" />
                    </form>
                    <button onClick={this.props.closeHandler} className="avail-form-close">Close</button>
                </div>
            </div>
        );

    }
}