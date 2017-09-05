import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveTrainingStatus, fetchMonster } from '../actions'

class TrainingContainer extends Component {
  constructor(props) {
    super()

    this.state = {
      warning: true
    }

    props.fetchMonster()
  }

  // componentDidMount() {
  //   this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.forceUpdateInterval);
  // }

  handleStatus = (status) => {
   
    
    
    // this.forceUpdateInterval = setInterval(() => this.forceUpdate(countDownTime), 1000);
    // this.props.saveTrainingStatus(status, this.props.monster)

    this.forceUpdate()
  }

  forceUpdate = () => {
    let countDownTime = 60 * 5
    let t = countDownTime
    let minutes
    let seconds

    this.forceUpdateInterval = setInterval(() =>  {
      minutes = parseInt(t / 60, 10)
      seconds = parseInt(t % 60, 10);
      
      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds
  
      document.getElementById("time").innerHTML = minutes + ":" + seconds + "s"
  
      if (--t < 0) {
        t = countDownTime
      }

    }, 1000)


  }

  render() {

    return (
      <div>
        {
          (this.props.monster.status) ? 
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
          : 'Please choose monster'
        }
        <div id="time"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    monster: state.monster
  }
}

export default connect(mapStateToProps, { saveTrainingStatus, fetchMonster })(TrainingContainer)