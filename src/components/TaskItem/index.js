import {Component} from 'react' // Import Component from 'react' module
import EditTask from '../EditTask' // Import EditTask component
import DeleteItem from '../DeleteItem' // Import DeleteItem component
import './index.css' // Import local CSS file for styling

class TaskItem extends Component {
  constructor(props) {
    super(props)
    const {eachTaskDetails} = this.props // Destructure eachTaskDetails from props
    this.state = {eachTaskDetails} // Set initial state with eachTaskDetails
  }

  // Method to update task details after editing
  updateTask = editTask => {
    const {updatedTask} = this.props // Destructure updatedTask from props
    this.setState({
      eachTaskDetails: editTask, // Update state with edited task details
    })
    updatedTask(editTask) // Call updatedTask method to update task in parent component
  }

  // Method to handle task deletion
  taskDeletion = () => {
    const {eachTaskDetails, onDeletingTask} = this.props // Destructure eachTaskDetails and onDeletingTask from props
    const {id} = eachTaskDetails // Extract id from eachTaskDetails
    onDeletingTask(id) // Call onDeletingTask method with task id to delete the task
  }

  render() {
    const {eachTaskDetails} = this.state // Destructure eachTaskDetails from state

    // Destructure task details from eachTaskDetails
    const {title, description, assignee, priority, status} = eachTaskDetails

    return (
      <div className="task-card">
        <div className="task-header">
          {/* Task title and priority */}
          <h1 className="task-heading">{title}</h1>
          <p className="priority">{priority}</p>
        </div>
        <hr />
        {/* Task description */}
        <p className="task-description">{description}</p>
        <div className="task-header">
          {/* Assignee, EditTask, and DeleteItem components */}
          <p>{`@${assignee}`}</p>
          <div>
            <DeleteItem taskDeletion={this.taskDeletion} />{' '}
            {/* DeleteItem component */}
            <EditTask // EditTask component
              eachTaskDetails={eachTaskDetails} // Pass task details as props
              updateTask={this.updateTask} // Pass updateTask method as props
            />
          </div>
        </div>
        {/* Task status */}
        <div type="button" className="status">
          {status}
        </div>
      </div>
    )
  }
}

export default TaskItem // Export TaskItem component
