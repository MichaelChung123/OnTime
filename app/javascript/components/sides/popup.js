import React from 'react'

export default class Popup extends React.Component {

 
    render() {
        
        return (
            <div className="popup">
                <div className="popup_inner">
                    <div className="popup_form">
                        <input />
                        <input />
                        <input />
                        <button onClick={() => this.props.closePopup()}>close</button>

                    </div>
                </div>
            </div> 
        ) 
       
    }
  }


  