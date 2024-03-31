import './index.css'

import TaskItem from '../TaskItem'

const StatusCard = props => {
  const {statusType, newTaskList, taskUpdated, deleteTask} = props

  const updatedTask = editTask => {
    taskUpdated(editTask)
  }

  const onDeletingTask = id => {
    deleteTask(id)
  }

  const renderPendingTask = () => {
    const pendingTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Pending',
    )
    return (
      <div>
        {pendingTaskList.map(eachTask => (
          <TaskItem
            eachTaskDetails={eachTask}
            key={eachTask.id}
            updatedTask={updatedTask}
            onDeletingTask={onDeletingTask}
          />
        ))}
      </div>
    )
  }

  const renderInProgressTask = () => {
    const inProgressTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'In Progress',
    )
    return (
      <>
        {inProgressTaskList.map(eachTask => (
          <TaskItem
            eachTaskDetails={eachTask}
            key={eachTask.id}
            updatedTask={updatedTask}
            onDeletingTask={onDeletingTask}
          />
        ))}
      </>
    )
  }

  const renderCompletedTask = () => {
    const completedTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Completed',
    )
    return (
      <>
        {completedTaskList.map(eachTask => (
          <TaskItem
            eachTaskDetails={eachTask}
            key={eachTask.id}
            updatedTask={updatedTask}
            onDeletingTask={onDeletingTask}
          />
        ))}
      </>
    )
  }

  const renderDeployedTask = () => {
    const DeployedTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Deployed',
    )
    return (
      <>
        {DeployedTaskList.map(eachTask => (
          <TaskItem
            eachTaskDetails={eachTask}
            key={eachTask.id}
            updatedTask={updatedTask}
            onDeletingTask={onDeletingTask}
          />
        ))}
      </>
    )
  }

  const renderDeferredTask = () => {
    const defferedTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Deferred',
    )
    return (
      <>
        {defferedTaskList.map(eachTask => (
          <TaskItem
            eachTaskDetails={eachTask}
            key={eachTask.id}
            updatedTask={updatedTask}
            onDeletingTask={onDeletingTask}
          />
        ))}
      </>
    )
  }

  const getTaskList = () => {
    switch (statusType) {
      case 'Pending':
        return renderPendingTask()
      case 'In Progress':
        return renderInProgressTask()
      case 'Completed':
        return renderCompletedTask()
      case 'Deployed':
        return renderDeployedTask()
      case 'Deferred':
        return renderDeferredTask()
      default:
        return null
    }
  }

  return (
    <div className="status-card-container">
      <h1 className={`status-heading ${statusType}`}>{statusType}</h1>
      <div className="status-task-container">{getTaskList()}</div>
    </div>
  )
}

export default StatusCard
