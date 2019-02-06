import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import EditEmployee from './editEmployee'
import Contact from './contact'
import DeletePopup from './deletePopup'
import Availability from './availability'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { throws } from 'assert';
import dateFns from 'date-fns'

export default class SideEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            renderChild: false,
            expanded: true,
            mounted: false
        }

        this.editEmployee = this.editEmployee.bind(this);
        this.showContact = this.showContact.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

        this.back = this.back.bind(this);
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
    };

    editEmployee() {
        this.setState({
            renderChild: "edit"
        });
    }

    showContact() {
        this.setState({
            renderChild: "contact"
        });
    }

    deleteEmployee() {
        this.setState({
            renderChild: "delete"
        });
    }

    changeAvailability = () => {
        this.setState({
            renderChild: "availability"
        });
    }

    back() {
        this.setState({
            renderChild: false
        });

        this.props.getEmpShift();

    }

    timeFormat(time) {
        if (time > 12) {
            time -= 12;
            time = time + ":00 PM";
        } else if (time === 12) {
            time = 12 + ":00 PM";
        }
        else {
            time = time + ":00 AM";
        }

        return time;
    }

    render() {
        const employeeId = this.props.employee.id;
        const currentDate = this.props.getDate;
        const day = dateFns.format(currentDate, 'dddd');
        const monday = dateFns.subDays(currentDate, findDayforMon(day));
        const tuesday = dateFns.subDays(currentDate, findDayforMon(day) - 1);
        const wednesday = dateFns.subDays(currentDate, findDayforMon(day) -2);
        const thursday = dateFns.subDays(currentDate, findDayforMon(day) -3);
        const friday = dateFns.subDays(currentDate, findDayforMon(day) -4);
        const saturday = dateFns.subDays(currentDate, findDayforMon(day) -5);
        const sunday = dateFns.subDays(currentDate, findDayforMon(day) -6);
        const shifts = [];
        const thisWeek = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
        const thisWeekFormatted = [];

        thisWeek.forEach(function(day) {
            thisWeekFormatted.push(dateFns.format(day, 'dddd MMMM Do'))
        })

        this.props.shifts.forEach(function(shift) {
            if (shift.employee_id === employeeId) {
                thisWeekFormatted.forEach(function(day) {
                    if (day == shift.day) {
                        shifts.push(shift)
                    }
                })

            }
        });

        function findDayforMon(today) {
            let position = 0;
            const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            week.forEach((day, i) => {if (today == day) position = i});
            return position;
        };
        
        
        
        
        const shiftDetails = shifts.map(function(shift) {
            let convertStartTime;
            let convertEndTime;
                if (shift.start_time == 12) {convertStartTime = shift.start_time + 'PM'} else if (shift.start_time > 12) {convertStartTime = shift.start_time - 12 + 'PM'} else {convertStartTime = shift.start_time + 'AM'}
                if (shift.end_time == 12) {convertEndTime = shift.end_time + 'PM'} else if (shift.end_time > 12) {convertEndTime = (shift.end_time - 12 + 'PM')} else {convertEndTime = shift.end_time + 'AM'}
            return (
            <NavItem>
                <NavIcon></NavIcon>
                <NavText>
                    <li>{shift.day} {convertStartTime} - {convertEndTime}</li>
                </NavText>
            </NavItem>
            )
        });

        let availabilities = this.props.availabilities.sort((a,b) => a.id - b.id).map((e, index) => {
            if (e.employee_id === employeeId) {
                if (e.start_time == 0 || e.end_time == 0) { 
                    return <li>Not Available</li> 
                } else { 
                    return (
                        <NavItem key={index}>
                            <NavIcon>

                            </NavIcon>
                            <NavText>
                                <div className="try-list">
                                    <li>{e.day} at {this.timeFormat(e.start_time)} - {this.timeFormat(e.end_time)}</li>
                                </div>
                            </NavText>
                        </NavItem>
                    );
                }
            }
        });

        const render = this.state.renderChild;

        if (render === "edit") {
            return (
                <EditEmployee refreshComponent={this.props.refreshComponent} getEmpShift={this.props.getEmpShift} setEmployee={this.setEmployee} back={this.back} employee={this.props.employee} />
            );
        }

        if (render === "contact") {
            return (
                <Contact back={this.back} employee={this.props.employee} />
            );
        }

        if (render === "availability") {
            return (
                <Availability refreshAvail={this.props.refreshAvail} refreshComponent={this.props.refreshComponent} getEmpShift={this.props.getEmpShift} setEmployee={this.setEmployee} back={this.back} employee={this.props.employee} availabilities={this.props.availabilities} />
            );
        }

        if (render === "delete") {
            return (
                <ReactCSSTransitionGroup
                    transitionName="popup_css"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    <DeletePopup refreshComponent={this.props.refreshComponent} getEmpShift={this.props.getEmpShift} back={this.props.back} employee={this.props.employee}/>
                </ReactCSSTransitionGroup>
            );
        }

        return (
            <div>
                <SideNav expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({ expanded: !this.state.expanded });
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav>
                        <NavItem eventKey="add-shift">
                            <NavIcon>
                                <i className="fas fa-arrow-alt-circle-left"></i>
                            </NavIcon>
                            <NavText onClick={() => this.props.back()}>
                                Back
                        </NavText>
                        </NavItem>
                    
                        <div className={`slide${this.state.mounted ? " enter" : ""}`}>
                            <div className="row profile">
                                <div className="col-md-3">
                                    <div className="profile-sidebar">

                                        <div className="profile-userpic">
                                            {/* <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" className="img-responsive" alt=""> */}
                                        </div>

                                        <div className="profile-usertitle">
                                            <div className="profile-usertitle-name">
                                                {this.props.employee.first_name} {this.props.employee.last_name}
                                            </div>
                                            <div className="profile-usertitle-job">
                                                {this.props.employee.occupation}
                                            </div>
                                        </div>

                                        <div className="profile-userbuttons">
                                            <button type="button" className="btn btn-success btn-sm" onClick={this.editEmployee}>Edit</button>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={this.changeAvailability}>Availability</button>
                                            <button type="button" className="btn btn-success btn-sm" onClick={this.showContact}>Contact</button>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteEmployee}>Delete</button>
                                        </div>

                                        <div className="try-div">

                                            <div className="profile-shifts">
                                                <div className="profile-shift-title">
                                                    Availabilities
                                                </div>
                                                <div className="list-of-shifts">
                                                    {availabilities}
                                                </div>
                                            </div>

                                            <div className="profile-shifts">
                                                <div className="profile-shift-title">
                                                    Scheduled Shifts
                                                </div>
                                                <div className="list-of-shifts">
                                                    {shiftDetails}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}
