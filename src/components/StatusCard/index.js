import './index.css'

import TaskItem from '../TaskItem'

const StatusCard = props => {
  const {statusType, newTaskList, taskUpdated} = props

  const updatedTask = editTask => {
    taskUpdated(editTask)
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
          <TaskItem eachTaskDetails={eachTask} key={eachTask.id} />
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
          <TaskItem eachTaskDetails={eachTask} key={eachTask.id} />
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
          <TaskItem eachTaskDetails={eachTask} key={eachTask.id} />
        ))}
      </>
    )
  }

  const renderDefferedTask = () => {
    const defferedTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Deffered',
    )
    return (
      <>
        {defferedTaskList.map(eachTask => (
          <TaskItem eachTaskDetails={eachTask} key={eachTask.id} />
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
      case 'Deffered':
        return renderDefferedTask()
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
