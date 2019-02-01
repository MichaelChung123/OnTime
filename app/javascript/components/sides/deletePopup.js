import React from 'react'

export default class DeletePopup extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        event.preventDefault();

        let data = {
            id: this.props.employee.id
        }

        fetch('/api/employees/' + data.id, {
            method: "DELETE",
        });

        this.props.back();
    }

    render() {
        return (
            <div className="delete-popup">
                <div className="delete-form-container">
                    <div className="delete-form-text">
                        <i className="fas fa-exclamation-triangle fa-5x"></i>
                        <p>Are you sure you would like to delete {this.props.employee.first_name} {this.props.employee.last_name}?</p>
                    </div>

                    <div className="delete-popup-button-container">
                        <button className="delete-popup-button-yes" onClick={this.handleDelete}>Yes</button>
                        <button className="delete-popup-button-no" onClick={() => this.props.back()}>No</button>
                    </div>
                </div>
            </div>
        );

    }
}


