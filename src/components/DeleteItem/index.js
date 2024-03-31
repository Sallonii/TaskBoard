import Popup from 'reactjs-popup'

import './index.css'

import {MdDelete} from 'react-icons/md'

import 'reactjs-popup/dist/index.css'

const DeleteItem = props => {
  const {taskDeletion} = props

  const deleteItem = close => {
    taskDeletion()
    close()
  }

  return (
    <div className="delete-popup-container">
      <Popup modal trigger={<MdDelete className="dnn" />}>
        {close => (
          <>
            <div>
              <p>Do you want to delete this task!</p>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => deleteItem(close)}
            >
              Delete
            </button>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              No
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}
export default DeleteItem
