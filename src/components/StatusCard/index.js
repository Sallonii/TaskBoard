import './index.css'

import TaskItem from '../TaskItem'

const StatusCard = props => {
  const {statusType, newTaskList} = props

  const renderPendingTask = () => {
    const pendingTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Pending',
    )
    return (
      <>
        {pendingTaskList.map(eachTask => (
          <TaskItem eachTaskDetails={eachTask} key={eachTask.id} />
        ))}
      </>
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
      {getTaskList()}
    </div>
  )
}

export default StatusCard
