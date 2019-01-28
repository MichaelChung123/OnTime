import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class SideEmployee extends React.Component {

    render() {
        return (
            <SideNav.Nav>
                <NavItem eventKey="add-shift">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText onClick={() => this.props.back()}>
                        Back
                    </NavText>
                </NavItem>
                
                    <div className="container">
                    <div className="row profile">
                        <div className="col-md-3">
                            <div className="profile-sidebar">
                                
                                <div className="profile-userpic">
                                    {/* <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" className="img-responsive" alt=""> */}
                                </div>
                                
                                <div className="profile-usertitle">
                                    <div className="profile-usertitle-name">
                                        { this.props.employee.first_name } { this.props.employee.last_name }
                                    </div>
                                    <div className="profile-usertitle-job">
                                    { this.props.employee.occupation }
                                    </div>
                                </div>
                                
                                <div className="profile-userbuttons">
                                    <button type="button" className="btn btn-success btn-sm">Follow</button>
                                    <button type="button" className="btn btn-danger btn-sm">Message</button>
                                </div>
                                
                                <div className="profile-usermenu">
                                    <ul className="nav">
                                        <li>
                                            <a href="#">
                                            <i className="glyphicon glyphicon-user"></i>
                                            Account Settings </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i className="glyphicon glyphicon-user"></i>
                                            Contact </a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="profile-content">
                               Some user related content goes here...
                            </div>
                        </div>
                    </div>
                </div>


                <NavItem>
                    <NavText>
                        Scheduled Shifts
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        )
    }
}
