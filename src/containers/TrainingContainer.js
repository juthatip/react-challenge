import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveTrainingStatus, fetchMonster } from '../actions'

class TrainingContainer extends Component {
  constructor(props) {
    super()

    this.state = {
      warning: true,
      disabled: false 
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
    this.props.saveTrainingStatus(status, this.props.monster)

    this.setState({disabled: true})
    this.forceUpdate()
  }

  forceUpdate = () => {
    // let countDownTime = 60 * 5
    let countDownTime = 10
    let t = countDownTime
    let minutes
    let seconds

    this.forceUpdateInterval = setInterval(() =>  {
      minutes = parseInt(t / 60, 10)
      seconds = parseInt(t % 60, 10);
      
      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds
  
      document.getElementById("time").innerHTML = `wait ${minutes} : ${seconds}`
  
      if (--t < 0) {
        t = countDownTime
        clearInterval(this.forceUpdateInterval);
        this.setState({disabled: false})
        document.getElementById("time").innerHTML = ''
      }

    }, 1000)


  }

  render() {
    const disabled = this.state.disabled ? true : false

    return (
      <div>
        {
          (this.props.monster.status) ? 
          <ul>
            <li>
            Run <button disabled={disabled} onClick={this.handleStatus.bind(this, 'run')}>upgrade</button>
            </li>
            <li>
              Carry <button disabled={disabled} onClick={this.handleStatus.bind(this, 'carry')}>upgrade</button>
            </li>
            <li>
              Swim <button disabled={disabled} onClick={this.handleStatus.bind(this, 'swim')}>upgrade</button>
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