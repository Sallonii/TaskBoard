import {Component} from 'react'

import {v4} from 'uuid'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

class AddTask extends Component {
  state = {
    title: '',
    status: 'Pending',
    priority: 'P0',
    assignee: '',
    team: '',
    description: '',
    showError: false,
  }

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

  showAddError = () => {
    this.setState({showError: true})
  }

  add = close => {
    const {title, description, status, priority, assignee, team} = this.state

    const {updateTaskList, newTaskList} = this.props

    if (title === '' || description === '' || assignee === '' || team === '') {
      this.showAddError()
    } else {
      const addTask = {
        id: v4(),
        title,
        description,
        status,
        priority,
        assignee,
        team,
        date: new Date(),
      }

      updateTaskList({...newTaskList, ...addTask})
      this.setState({
        title: '',
        description: '',
        status: 'Completed',
        priority: 'P0',
        assignee: '',
        team: '',
        showError: false,
      })
      close()
    }
  }

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
        {showError && <p className="error-message">Complete inputs!!</p>}
        <div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => this.add(close)}
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
        </Popup>
      </div>
    )
  }
}

export default AddTask
