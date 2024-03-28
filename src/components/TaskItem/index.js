import EditTask from '../EditTask'

import './index.css'

const TaskItem = props => {
  const {eachTaskDetails, edit} = props
  const {
    id,
    title,
    description,
    assignee,
    team,
    priority,
    status,
  } = eachTaskDetails

  const onClickingEditButton = () => {
    edit(id)
  }

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
        <EditTask eachTaskDetails={eachTaskDetails} />
      </div>
      <div type="button" className="status">
        {status}
      </div>
    </div>
  )
}

export default TaskItem
