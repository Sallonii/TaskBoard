import {Component} from 'react'

import {v4} from 'uuid'

import {FaEdit} from 'react-icons/fa'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

class EditTask extends Component {
  renderTaskElements = close => (
    <div>
      <h1>Hi</h1>
      <button type="button">Close</button>
    </div>
  )

  render() {
    return (
      <div className="popup-container">
        <Popup modal trigger={<EditTask />}>
          {close => <>{this.renderTaskElements(close)}</>}
        </Popup>
      </div>
    )
  }
}

export default EditTask
