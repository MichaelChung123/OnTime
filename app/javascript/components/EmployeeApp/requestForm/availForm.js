import React from 'react'

export default class EmployeeAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monStart: "mon9:00 AM",
            monEnd: "mon9:00 PM",
            tuesStart: "tues9:00 AM",
            tuesEnd: "tues9:00 PM",
            wedStart: "wed9:00 AM",
            wedEnd: "wed9:00 PM",
            thursStart: "thurs9:00 AM",
            thursEnd: "thurs9:00 PM",
            friStart: "fri9:00 AM",
            friEnd: "fri9:00 PM",
            satStart: "sat9:00 AM",
            satEnd: "sat9:00 PM",
            sunStart: "sun9:00 AM",
            sunEnd: "sun9:00 PM"
            // monStartLoaded: false,
            // monEndLoaded: false,
            // tuesStartLoaded: false,
            // tuesEndLoaded: false,
            // wedStartLoaded: false,
            // wedEndLoaded: false,
            // thursStartLoaded: false,
            // thursEndLoaded: false,
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

    handleSubmit = (event) => {
        event.preventDefault();

        let data = {
            employee_id: 1,
            monStart: this.state.monStart,
            monEnd: this.state.monEnd,            
            tuesStart: this.state.tuesStart,
            tuesEnd: this.state.tuesEnd,
            wedStart: this.state.wedStart,
            wedEnd: this.state.wedEnd,
            thursStart: this.state.thursStart,
            thursEnd: this.state.thursEnd,
            friStart: this.state.friStart,
            friEnd: this.state.friEnd,
            satStart: this.state.satStart,
            satEnd: this.state.satEnd,
            sunStart: this.state.sunStart,
            sunEnd: this.state.sunEnd
        }

        fetch('/api/availability', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    setAvail = () => {
        for(let avail of this.props.availabilities) {
            if(avail.id === 1) {
                if(avail.day === "Monday") {
                    if (avail.start_time <= 12) {
                        this.setState({monStart: `mon${avail.start_time}:00 AM`});
                    } else {
                        this.setState({monStart: `mon${avail.start_time - 12}:00 PM`});
                    }

                    if (avail.end_time <= 12) {
                        this.setState({monEnd: `mon${avail.end_time}:00 AM`});
                    } else {
                        this.setState({monEnd: `mon${avail.end_time - 12}:00 PM`});
                    }
                } 
                else if (avail.day === "Tuesday") {
                    if (avail.start_time <= 12) {
                        this.setState({tuesStart: `tues${avail.start_time}:00 AM`});
                    } else {
                        this.setState({tuesStart: `tues${avail.start_time - 12}:00 PM`});
                    }

                    if (avail.end_time <= 12) {
                        this.setState({tuesEnd: `tues${avail.end_time}:00 AM`});
                    } else {
                        this.setState({tuesEnd: `tues${avail.end_time - 12}:00 PM`});
                    }
                }
                else if (avail.day === "Wednesday") {
                    if (avail.start_time <= 12) {
                        this.setState({wedStart: `wed${avail.start_time}:00 AM`});
                    } else {
                        this.setState({wedStart: `wed${avail.start_time - 12}:00 PM`});
                    }

                    if (avail.end_time <= 12) {
                        this.setState({wedEnd: `wed${avail.end_time}:00 AM`});
                    } else {
                        this.setState({wedEnd: `wed${avail.end_time - 12}:00 PM`});
                    }
                }
                else if (avail.day === "Thursday") {
                    if (avail.start_time <= 12) {
                        this.setState({thursStart: `thurs${avail.start_time}:00 AM`});
                    } else {
                        this.setState({thursStart: `thurs${avail.start_time - 12}:00 PM`});
                    }

                    if (avail.end_time <= 12) {
                        this.setState({thursEnd: `thurs${avail.end_time}:00 AM`});
                    } else {
                        this.setState({thursEnd: `thurs${avail.end_time - 12}:00 PM`});
                    }
                }
                else if (avail.day === "Friday") {
                    if (avail.start_time <= 12) {
                        this.setState({friStart: `fri${avail.start_time}:00 AM`});
                    } else {
                        this.setState({friStart: `fri${avail.start_time - 12}:00 PM`});
                    }

                    if (avail.end_time <= 12) {
                        this.setState({friEnd: `fri${avail.end_time}:00 AM`});
                    } else {
                        this.setState({friEnd: `fri${avail.end_time - 12}:00 PM`});
                    }
                }
                else if (avail.day === "Saturday") {
                    if (avail.start_time <= 12) {
                        this.setState({satStart: `sat${avail.start_time}:00 AM`});
                    } else {
                        this.setState({satStart: `sat${avail.start_time - 12}:00 PM`});
                    }

                    if (avail.end_time <= 12) {
                        this.setState({satEnd: `sat${avail.end_time}:00 AM`});
                    } else {
                        this.setState({satEnd: `sat${avail.end_time - 12}:00 PM`});
                    }
                }
                else if (avail.day === "Sunday") {
                    if (avail.start_time <= 12) {
                        this.setState({sunStart: `sun${avail.start_time}:00 AM`});
                    } else {
                        this.setState({sunStart: `sun${avail.start_time - 12}:00 PM`});
                    }

                    if (avail.end_time <= 12) {
                        this.setState({sunEnd: `sun${avail.end_time}:00 AM`});
                    } else {
                        this.setState({sunEnd: `sun${avail.end_time - 12}:00 PM`});
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
                    <select name="tuesStart" value={this.state.tuesStart} onChange={(event) => this.setState({ tuesStart: event.target.value, tuesStartLoaded: true })}>
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
                    <select name="tuesEnd" value={this.state.tuesEnd} onChange={(event) => this.setState({ tuesEnd: event.target.value, tuesEndLoaded: true })}>
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
                    <select name="thursStart" value={this.state.thursStart} onChange={(event) => this.setState({ thursStart: event.target.value, thursStartLoaded: true })}>
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
                    <select name="thursEnd" value={this.state.thursEnd} onChange={(event) => this.setState({ thursEnd: event.target.value, thursEndLoaded: true })}>
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