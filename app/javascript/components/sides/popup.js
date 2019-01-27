import React from 'react'


export default class Popup extends React.Component {
    constructor() {
        super();
        this.state = {
            formOpened: true
        }
        this.clickClose = this.clickClose.bind(this);
    }
    clickClose() {
        this.setState({
            formOpened: false
        });
    }
    
    render() {
        
        return this.state.formOpened ? (
            <div className="popup">
                <div className="popup_inner">
                    <div className="popup_form">
                        <input />
                        <button onClick={() => this.clickClose()}>close</button>
                    </div>
                </div>
            </div> 
        ) : null
       
    }
  }


  