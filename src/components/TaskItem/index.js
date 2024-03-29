import {Component} from 'react'

import EditTask from '../EditTask'

import './index.css'

class TaskItem extends Component {
  constructor(props) {
    super(props)
    const {eachTaskDetails} = this.props
    this.state = {eachTaskDetails}
  }

  updateTask = editTask => {
    const {updatedTask} = this.props
    this.setState({
      eachTaskDetails: editTask,
    })
    updatedTask(editTask)
  }

  render() {
    const {eachTaskDetails} = this.state

    const {
      id,
      title,
      description,
      assignee,
      team,
      priority,
      status,
    } = eachTaskDetails
    return (
      <div className="task-card">
        <div className="task-header">
          <h1 className="task-heading">{title}</h1>
          <p className="priority">{priority}</p>
        </div>
        <hr />
        <p className="task-description">{description}</p>
        <div className="task-header">
          <p>{`@${assignee}`}</p>
          <EditTask
            eachTaskDetails={eachTaskDetails}
            updateTask={this.updateTask}
          />
        </div>
        <div type="button" className="status">
          {status}
        </div>
      </div>
    )
  }
}

export default TaskItem
