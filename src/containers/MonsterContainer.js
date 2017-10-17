import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveMonster, fetchMonster } from '../actions'

class StartContainer extends Component {
  constructor(props) {
    super(props)

    this.monster = [
      {
        name: "monster01",
        status: {
          hp: 100,
          mp: 100,
          str: 100,
          vit: 100,
          agi: 100,
          dex: 100,
          luck: 0,
          extraElement: "",
          stamina: 50
        }
      },
      {
        name: "monster02",
        status: {
          hp: 200,
          mp: 200,
          str: 200,
          vit: 200,
          agi: 200,
          dex: 200,
          luck: 0,
          extraElement: "",
          stamina: 80
        }
      },
      {
        name: "monster03",
        status: {
          hp: 300,
          mp: 300,
          str: 300,
          vit: 300,
          agi: 300,
          dex: 300,
          luck: 0,
          extraElement: "",
          stamina: 0
        }
      },
    ]

    this.element = {
      fire:  false,
      water: false,
      wind:  false,
      earth: false
    }

    this.state = {
      player: {
        name: '',
        status: {}
      },
      close: false
    }

  }

  randomMonster = () => {
   
    const monster = this.randomItem(this.monster)

    let player = JSON.parse(JSON.stringify(monster))

    const elements = Object.keys(this.element)
    let elementVal = this.randomItem(elements)

    const randomLuck = Math.floor(Math.random() * 10 + 1)


    if (randomLuck === 1) {
      player.status['luck'] += 100
    } else {
      player.status['luck'] = 0
    }

    let status

    if(elementVal === 'fire') {
      status = 'str'
    }else if (elementVal === 'water') {
      status = 'dex'
    }else if (elementVal === 'wind') {
      status = 'agi'
    }else if (elementVal === 'earth') {
      status = 'vit'
    }

    player.status[status] += 100
    player.status['extraElement'] = elementVal

    
    this.setState({
      player: player,
      close: true
    }, () => {
      this.props.saveMonster(this.state.player)
      this.props.fetchMonster(this.state.player)
    })


  }

  randomItem(items) {
    const item = items[Math.floor(Math.random()*items.length)]
    return item
  }

  renderPlayerStatus() {
    if(!this.props.monster.status) return

    return (
      <div>
        <p>HP: {this.props.monster.status.hp}</p>
        <p>MP: {this.props.monster.status.mp}</p>
        <p>STR: {this.props.monster.status.str}</p>
        <p>VIT: {this.props.monster.status.vit}</p>
        <p>AGI: {this.props.monster.status.agi}</p>
        <p>DEX: {this.props.monster.status.dex}</p>
        <p>LUCK: {this.props.monster.status.luck}</p>
        <p>Stamina: {this.props.monster.status.stamina}</p>
        <p>Extra Element:  {this.props.monster.status.extraElement}</p>
      </div>
    )
  }
      
  render() {
    const classes = this.state.close ? 'hide' : 'show'

    return (
      <div className="App">
        <div className="App-header">
          <h2>Monster Summoner</h2>
        </div>
        { !this.state.close ? <h1>Choose your Monster</h1> : '' }
        <p>{this.props.monster.name}</p>
        {this.renderPlayerStatus()}
        <a onClick={this.randomMonster} className={`btn ${classes}`}>Random</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    monster: state.monster
  }
}

export default connect(mapStateToProps, { saveMonster, fetchMonster })(StartContainer)
