import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class EditEmployee extends React.Component {

    render() {
        return (
            <SideNav>
                <SideNav.Nav>
                    <NavItem eventKey="add-shift">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText onClick={() => this.props.back()}>
                            Back
                        </NavText>
                    </NavItem>

                    

                </SideNav.Nav>
            </SideNav>
        );
    }
}