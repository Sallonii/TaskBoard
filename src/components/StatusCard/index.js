import './index.css' // Import CSS file

import TaskItem from '../TaskItem' // Import TaskItem component

const StatusCard = props => {
  const {statusType, newTaskList, taskUpdated, deleteTask} = props

  // Function to update task
  const updatedTask = editTask => {
    taskUpdated(editTask)
  }

  // Function to delete task
  const onDeletingTask = id => {
    deleteTask(id)
  }

  // Functions to render tasks based on status type
  const renderPendingTask = () => {
    const pendingTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Pending',
    )
    return pendingTaskList.map(eachTask => (
      <TaskItem
        eachTaskDetails={eachTask}
        key={eachTask.id}
        updatedTask={updatedTask}
        onDeletingTask={onDeletingTask}
      />
    ))
  }

  const renderInProgressTask = () => {
    const inProgressTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'In Progress',
    )
    return inProgressTaskList.map(eachTask => (
      <TaskItem
        eachTaskDetails={eachTask}
        key={eachTask.id}
        updatedTask={updatedTask}
        onDeletingTask={onDeletingTask}
      />
    ))
  }

  const renderCompletedTask = () => {
    const completedTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Completed',
    )
    return completedTaskList.map(eachTask => (
      <TaskItem
        eachTaskDetails={eachTask}
        key={eachTask.id}
        updatedTask={updatedTask}
        onDeletingTask={onDeletingTask}
      />
    ))
  }

  const renderDeployedTask = () => {
    const deployedTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Deployed',
    )
    return deployedTaskList.map(eachTask => (
      <TaskItem
        eachTaskDetails={eachTask}
        key={eachTask.id}
        updatedTask={updatedTask}
        onDeletingTask={onDeletingTask}
      />
    ))
  }

  const renderDeferredTask = () => {
    const deferredTaskList = newTaskList.filter(
      eachTask => eachTask.status === 'Deferred',
    )
    return deferredTaskList.map(eachTask => (
      <TaskItem
        eachTaskDetails={eachTask}
        key={eachTask.id}
        updatedTask={updatedTask}
        onDeletingTask={onDeletingTask}
      />
    ))
  }

  // Function to get task list based on status type
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
