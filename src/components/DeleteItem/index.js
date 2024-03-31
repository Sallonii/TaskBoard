import Popup from 'reactjs-popup' // Import Popup component from 'reactjs-popup' package
import './index.css' // Import CSS file for styling
import {MdDelete} from 'react-icons/md' // Import MdDelete icon from 'react-icons/md' package
import 'reactjs-popup/dist/index.css' // Import CSS for Popup

// DeleteItem component definition
const DeleteItem = props => {
  const {taskDeletion} = props // Destructure taskDeletion function from props

  // Function to delete item and close the popup
  const deleteItem = close => {
    taskDeletion() // Call taskDeletion function passed via props
    close() // Close the popup
  }

  return (
    <div className="delete-popup-container">
      {' '}
      {/* Container for delete popup */}
      {/* Popup component for deletion confirmation */}
      <Popup modal trigger={<MdDelete className="dnn" />}>
        {(
          close, // Render function for Popup content
        ) => (
          <>
            {' '}
            {/* Fragment shorthand */}
            <div>
              <p>Do you want to delete this task!</p>{' '}
              {/* Message for deletion confirmation */}
            </div>
            {/* Delete button with onClick event handling */}
            <button
              type="button"
              className="trigger-button"
              onClick={() => deleteItem(close)} // Call deleteItem function on click
            >
              Delete
            </button>
            {/* Cancel button with onClick event handling to close the popup */}
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()} // Close the popup on click
            >
              No
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default DeleteItem // Export DeleteItem component
