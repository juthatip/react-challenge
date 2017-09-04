import React, { Component } from 'react'
import { saveTrainingStatus } from '../actions'
import { connect } from 'react-redux'

class TrainingContainer extends Component {
  constructor() {
    super()
  }

  handleStatus = (status) => {

    // this.props.saveTrainingStatus(status, )
  }

  render() {
    return (
      <div>
        <ul>
          <li>
           Run <button onClick={this.handleStatus.bind(this, 'run')}>upgrade</button>
          </li>
          <li>
            Carry <button onClick={this.handleStatus.bind(this, 'carry')}>upgrade</button>
          </li>
          <li>
            Swim <button onClick={this.handleStatus.bind(this, 'swim')}>upgrade</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(null, { saveTrainingStatus })(TrainingContainer)