import {Component} from 'react' // Import Component from React library
import {FaRegUserCircle} from 'react-icons/fa' // Import FaRegUserCircle icon from react-icons/fa
import AddTask from '../AddTask' // Import AddTask component
import StatusCard from '../StatusCard' // Import StatusCard component
import './index.css' // Import CSS file for styling

// Constants for priority filtering
const priorityConstants = [
  {
    id: 'priority0',
    name: 'P0',
    value: 'P0',
  },
  {
    id: 'priority1',
    name: 'P1',
    value: 'P1',
  },
  {
    id: 'priority2',
    name: 'P2',
    value: 'P2',
  },
  {
    id: 'all',
    name: 'All',
    value: '',
  },
]

// List of status types
const statusTypeList = [
  {
    id: 0,
    status: 'Pending',
  },
  {
    id: 1,
    status: 'In Progress',
  },
  {
    id: 2,
    status: 'Completed',
  },
  {
    id: 3,
    status: 'Deployed',
  },
  {
    id: 4,
    status: 'Deferred',
  },
]

class TaskBoard extends Component {
  state = {
    newTaskList: [], // Array to store new tasks
    assignee: '', // Assignee filter
    priority: '', // Priority filter
    startDate: '', // Start date filter
    endDate: '', // End date filter
  }

  // Event handlers for input changes
  onChangingAssigneeName = event => {
    this.setState({assignee: event.target.value})
  }

  onChangingPriority = event => {
    this.setState({priority: event.target.value})
  }

  handleStartDateChange = event => {
    this.setState({startDate: event.target.value})
  }

  handleEndDateChange = event => {
    this.setState({endDate: event.target.value})
  }

  // Render input elements for assignee name, priority filter, and date filter
  renderAssigneeName = () => (
    <input
      placeholder="Assignee Name"
      className="input-element"
      onChange={this.onChangingAssigneeName}
    />
  )

  renderPriorityFilter = () => (
    <select className="input-element" onChange={this.onChangingPriority}>
      <option defaultValue hidden>
        Priority
      </option>
      {priorityConstants.map(eachPriority => (
        <option key={eachPriority.id} value={eachPriority.value}>
          {eachPriority.name}
        </option>
      ))}
    </select>
  )

  renderDate = () => (
    <div className="date-filter-container input-element">
      <label htmlFor="start-date" hidden>
        Start Date:
      </label>
      <input
        className="form-control date-input input-element"
        id="start-date"
        type="date"
        onChange={this.handleStartDateChange}
      />
      <p className="date-margin md-device-date">-</p>
      <label htmlFor="end-date" hidden>
        End Date:
      </label>
      <input
        className="form-control date-input md-device-date input-element"
        id="end-date"
        type="date"
        onChange={this.handleEndDateChange}
      />
    </div>
  )

  // Method to update task details
  taskUpdated = editedTask => {
    const {newTaskList} = this.state
    const updatedTaskList = newTaskList.map(task => {
      if (task.id === editedTask.id) {
        return editedTask
      }
      return task
    })

    this.setState({newTaskList: updatedTaskList})
  }

  // Method to add task to the task list
  updateTaskList = newList => {
    this.setState(prevState => ({
      newTaskList: [...prevState.newTaskList, newList],
    }))
  }

  // Method to delete task from the task list
  deleteTask = id => {
    const {newTaskList} = this.state

    const listAfterDeleting = newTaskList.filter(eachTask => eachTask.id !== id)

    this.setState({newTaskList: listAfterDeleting})
  }

  render() {
    const {newTaskList, assignee, priority, startDate, endDate} = this.state

    // Filter tasks based on assignee, priority, and date
    const filteredAssigneeList = newTaskList.filter(eachItem =>
      eachItem.assignee.toLowerCase().includes(assignee.toLowerCase()),
    )

    const filteredPriorityList = filteredAssigneeList.filter(eachItem =>
      eachItem.priority.toLowerCase().includes(priority.toLowerCase()),
    )

    const filteredDateList = filteredPriorityList.filter(eachDate => {
      const taskDate = new Date(eachDate.date)
      const startDateObj = new Date(startDate)
      const endDateObj = new Date(endDate)

      return taskDate >= startDateObj && taskDate <= endDateObj
    })

    // Sort tasks by date
    filteredDateList.sort((a, b) => new Date(a.date) - new Date(b.date))

    return (
      <div className="main-container">
        <div className="header-container">
          <h1>Task Board</h1>
          <FaRegUserCircle className="user-profile" />
        </div>
        <div className="card-container">
          <div className="filter-container">
            <h1 className="filter-heading">Filter By:</h1>
            <div className="filter-items-container">
              {this.renderAssigneeName()}
              {this.renderPriorityFilter()}
              {this.renderDate()}
            </div>
            <div className="add-task-container">
              <AddTask
                updateTaskList={this.updateTaskList}
                newTaskList={newTaskList}
              />
            </div>
          </div>
          <div className="task-items-main-container">
            {statusTypeList.map(eachTask => (
              <StatusCard
                statusType={eachTask.status}
                key={eachTask.id}
                newTaskList={filteredPriorityList}
                taskUpdated={this.taskUpdated}
                deleteTask={this.deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default TaskBoard
