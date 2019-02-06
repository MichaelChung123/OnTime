import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import dateFns from 'date-fns'
export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
    }

    render() {
        const currentDate = this.props.currentDate;
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
            if (shift.employee_id === 1) {
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


        return (
            <div>
                <SideNav expanded={true}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav>
                        <NavItem>
                            <NavIcon>
                            </NavIcon>
                            <NavText>
                                <div className="employees-title">
                                    <i className="fas fa-users"></i>
                                    <div className="employee-text">Upcoming Shifts</div>
                                </div><br/>

                            </NavText>
                        </NavItem>

                        <div className="employee-shifts-list">

                             {shiftDetails}

                        </div>

                    </SideNav.Nav>
                </SideNav>
            </div>
        )
    }
}