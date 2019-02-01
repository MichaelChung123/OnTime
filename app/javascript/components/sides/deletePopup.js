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
            <div className="popup">
                <div className="form_container">
                    <h1>Are you sure you would like to delete {this.props.employee.first_name} {this.props.employee.last_name}?</h1>
                    <button onClick={this.handleDelete}>Yes</button>
                    <button onClick={() => this.props.back()}>No</button>
                </div>
            </div>
        );

    }
}


