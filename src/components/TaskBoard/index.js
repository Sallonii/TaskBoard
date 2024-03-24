import {Component} from 'react'

import {FaRegUserCircle} from 'react-icons/fa'

import './index.css'

const priority = [
  {
    id: 'priority0',
    name: 'P0',
  },
  {
    id: 'priority1',
    name: 'P1',
  },
  {
    id: 'priority2',
    name: 'P2',
  },
]

class TaskBoard extends Component {
  renderAssigneeName = () => (
    <input placeholder="Assignee Name" className="input-element" />
  )

  renderPriorityFilter = () => (
    <select className="input-element">
      <option disabled selected hidden>
        Priority
      </option>
      {priority.map(eachPriority => (
        <option>{eachPriority.name}</option>
      ))}
    </select>
  )

  renderDate = () => (
    <div className="date-filter-container input-element">
      <label htmlFor="start-date" hidden>
        Start Date:
      </label>
      <input
        className="form-control date-input"
        id="start-date"
        type="date"
        onChange={this.handleStartDateChange}
      />
      <p className="date-margin md-device-date">-</p>
      <label htmlFor="end-date" hidden>
        End Date:
      </label>
      <input
        className="form-control date-input md-device-date"
        id="end-date"
        type="date"
        onChange={this.handleEndDateChange}
      />
    </div>
  )

  render() {
    return (
      <div className="main-container">
        <div className="header-container">
          <h1>Task Board</h1>
          <FaRegUserCircle />
        </div>
        <div className="card-container">
          <div className="filter-container">
            <h1 className="filter-heading">Filter By:</h1>
            <div className="filter-items-container">
              {this.renderAssigneeName()}
              {this.renderPriorityFilter()}
              {this.renderDate()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskBoard
