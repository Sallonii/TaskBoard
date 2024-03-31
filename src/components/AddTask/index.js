import {Component} from 'react' // Import Component from React library
import {v4} from 'uuid' // Import v4 method from uuid library
import Popup from 'reactjs-popup' // Import Popup component from reactjs-popup library
import 'reactjs-popup/dist/index.css' // Import CSS for Popup component
import './index.css' // Import custom CSS styles

class AddTask extends Component {
  state = {
    title: '', // State for task title
    status: 'Pending', // Default status for new task
    priority: 'P0', // Default priority for new task
    assignee: '', // State for task assignee
    team: '', // State for task team
    description: '', // State for task description
    showError: false, // State to control error message display
  }

  // Event handlers for input changes
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

  // Method to show error message
  showAddError = () => {
    this.setState({showError: true})
  }

  // Method to add new task
  add = close => {
    const {title, description, status, priority, assignee, team} = this.state
    const {updateTaskList, newTaskList} = this.props

    // Check if all required fields are filled
    if (title === '' || description === '' || assignee === '' || team === '') {
      this.showAddError() // Show error message if any field is empty
    } else {
      const addTask = {
        // Create new task object
        id: v4(), // Generate unique ID for the task
        title,
        description,
        status,
        priority,
        assignee,
        team,
        date: new Date(), // Set current date for the task
      }

      updateTaskList({...newTaskList, ...addTask}) // Update task list with new task
      this.setState({
        // Reset input fields and error state
        title: '',
        description: '',
        status: 'Completed',
        priority: 'P0',
        assignee: '',
        team: '',
        showError: false,
      })
      close() // Close the Popup component
    }
  }

  // Render form elements for adding a new task
  renderTaskElements = close => {
    const {
      title,
      description,
      status,
      priority,
      assignee,
      team,
      showError,
    } = this.state
    return (
      <div className="popup">
        <h1 className="popup-heading">CREATE A TASK</h1>
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
            <select
              id="priority"
              onChange={this.onChangingPriority}
              value={priority}
            >
              <option>P0</option>
              <option>P1</option>
              <option>P2</option>
            </select>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select id="status" onChange={this.onChangingStatus} value={status}>
              <option>Pending</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Deployed</option>
              <option>Deferred</option>
            </select>
          </div>
        </div>
        {showError && <p className="error-message">Complete inputs!!</p>}{' '}
        {/* Error message for incomplete inputs */}
        <div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => this.add(close)} // Call add method on button click
          >
            Add
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              Add New Task
            </button>
          }
        >
          {close => <>{this.renderTaskElements(close)}</>}
          {/* Render form elements */}
        </Popup>
      </div>
    )
  }
}

export default AddTask // Export AddTask component
