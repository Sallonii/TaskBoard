import './index.css'

const TaskItem = props => {
  const {eachTaskDetails} = props
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
    <div>
      <h1>{status}</h1>
      <h1>{status}</h1>
      <h1>{status}</h1>
      <h1>{status}</h1>
      <h1>{status}</h1>
      <h1>{status}</h1>
      <h1>{status}</h1>
    </div>
  )
}

export default TaskItem
