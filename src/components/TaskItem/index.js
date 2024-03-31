import {Component} from 'react'

import EditTask from '../EditTask'
import DeleteItem from '../DeleteItem'

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

  taskDeletion = () => {
    const {eachTaskDetails, onDeletingTask} = this.props
    const {id} = eachTaskDetails
    onDeletingTask(id)
  }

  render() {
    const {eachTaskDetails} = this.state

    const {title, description, assignee, priority, status} = eachTaskDetails
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
          <div>
            <DeleteItem taskDeletion={this.taskDeletion} />
            <EditTask
              eachTaskDetails={eachTaskDetails}
              updateTask={this.updateTask}
            />
          </div>
        </div>
        <div type="button" className="status">
          {status}
        </div>
      </div>
    )
  }
}

export default TaskItem
