import React from 'react'


export default class Popup extends React.Component {


    render() {
        function closeButton() {
            
        }
        return (
            <div className="popup">
                <div className="popup_inner">
                    <div className="popup_form">
                        <input />
                        <button onClick={() => this.props.closeForm()}>close</button>
                    </div>
                </div>
            </div>
            

        )
       
    }
  }


  