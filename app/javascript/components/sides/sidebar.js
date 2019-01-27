import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Popup from './popup'
// import ReactTransitionGroup from 'react-addons-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
          clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
      }

      componentDidMount(){
        fetch('/api/employees')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ employees: data }) });
      }

      handleClick() {
        this.setState({
            clicked: !this.state.clicked
        })
      };

    render() {
        let employees = this.state.employees.map((e, i) => {
            return <li key={i}>{e.first_name}  {e.last_name}</li>
            
        });
        return ( 
            <SideNav
                onSelect={(selected) => {
                    
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem eventKey="add-shift" onSelect={() => this.handleClick()}>
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            + Add Shift
                        </NavText>
                    </NavItem>

                    <ReactCSSTransitionGroup
                         transitionName="popup_css"
                         transitionEnterTimeout={500}
                         transitionLeaveTimeout={300}
                        >
                            {this.state.clicked ? <Popup closePopup={this.handleClick} listOfemployees={employees}/> : null}            
                    </ReactCSSTransitionGroup>

                    <NavItem eventKey="add-employee">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} onSelect={("add-employee", event)} />
                        </NavIcon>
                        <NavText>
                            + Add Employee 
                        </NavText>
                        <NavItem eventKey="employee/subitem1">
                            <NavText>
                                Test Sub Item 1
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="employee/subitem2">
                            <NavText>
                                Test Sub Item 2
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem>
                        <NavIcon>

                        </NavIcon>
                        <NavText>
                            {employees}
                        </NavText>
                     </NavItem>
                    
                </SideNav.Nav>
            </SideNav>
        )
    }
}
