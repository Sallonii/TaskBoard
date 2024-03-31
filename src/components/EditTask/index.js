import {Component} from 'react'
import Popup from 'reactjs-popup'
import {FaEdit} from 'react-icons/fa'

import 'reactjs-popup/dist/index.css' // Import CSS for Popup
import './index.css' // Import local CSS file

class EditTask extends Component {
  // State to manage input fields and error display
  state = {
    title: '',
    status: 'Pending',
    priority: 'P0',
    assignee: '',
    team: '',
    description: '',
    showError: false, // Flag to track if an error should be displayed
  }

  // Event handlers for input changes
  // Update state with the new values from input fields
  onChangingTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangingDescription = event => {
    this.setState({description: event.target.value})
  }

  onChangingStatus = event => {
    this.setState({status: event.target.value})
  }

  onChangingPriority = event => {
    this.setState({priority: event.target.value})
  }

  onChangingAssignee = event => {
    this.setState({assignee: event.target.value})
  }

  onChangingTeam = event => {
    this.setState({team: event.target.value})
  }

  // Method to display error message
  showEditError = () => {
    this.setState({showError: true})
  }

  // Method to handle edit action
  edit = close => {
    const {updateTask, eachTaskDetails} = this.props
    const {title, description, status, priority, assignee, team} = this.state
    const {id} = eachTaskDetails

    // Create edited task object with updated values
    const editedTask = {
      id,
      title,
      description,
      status,
      priority,
      assignee,
      team,
      date: new Date(),
    }

    // Call updateTask function to update the task
    updateTask(editedTask)

    // Close the popup after editing
    close()
  }

  // Method to handle cancel action
  cancel = close => {
    close()
  }

  // Render the edit form based on task details and status
  renderForm = (taskDetails, close) => {
    const {title, description, assignee, team, showError} = taskDetails

    return (
      <div className="popup">
        <h1 className="popup-heading">EDIT TASK</h1>
        <div className="label-input-container">
          <label htmlFor="title" className="label">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={this.onChangingTitle}
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            type="textarea"
            value={description}
            onChange={this.onChangingDescription}
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="team">Team: </label>
          <input
            id="team"
            type="textarea"
            value={team}
            onChange={this.onChangingTeam}
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="assignee">Assignee: </label>
          <input
            id="assignee"
            type="textarea"
            value={assignee}
            onChange={this.onChangingAssignee}
          />
        </div>
        <div className="priority-and-status-container">
          <div>
            <label htmlFor="priority">Priority</label>
            <select id="priority" onChange={this.onChangingPriority}>
              <option>P0</option>
              <option>P1</option>
              <option>P2</option>
            </select>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select id="status" onChange={this.onChangingStatus}>
              <option>Pending</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Deployed</option>
              <option>Deferred</option>
            </select>
          </div>
        </div>
        {showError && <p className="error-message">Input Fields are empty!</p>}
        <div>
          {/* Edit and Cancel buttons */}
          <button
            type="button"
            className="trigger-button"
            onClick={() => this.edit(close)}
          >
            Edit
          </button>
          <button
            type="button"
            className="trigger-button"
            onClick={() => this.cancel(close)}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  // Render the edit form with appropriate task details
  renderEditForm = close => {
    const {eachTaskDetails} = this.props

    // Render form based on task status
    switch (eachTaskDetails.status) {
      case 'Completed':
        return this.renderForm(eachTaskDetails, close)
      default:
        return this.renderForm(this.state, close)
    }
  }

  // Render the component
  render() {
    return (
      <div className="edit-task-popup-container">
        {/* Popup for editing task */}
        <Popup modal trigger={<FaEdit className="edit-btn" />}>
          {close => <>{this.renderEditForm(close)}</>}
        </Popup>
      </div>
    )
  }
}

export default EditTask
