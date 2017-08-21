import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
          extraElement: ""
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
          extraElement: ""
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
          extraElement: ""
        }
      },
    ]

    this.element = {
      fire:  false,
      water: false,
      wind:  false,
      earth: false
    }

    // this.state = {
    //   element: {
    //     fire:  false,
    //     water: false,
    //     wind:  false,
    //     earth: false
    //   }
    // }

    this.state = {
      player: {
        name: '',
        status: {}
      }
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
      player: player
    })

  }

  randomItem(items) {
    const item = items[Math.floor(Math.random()*items.length)]
    return item
  }

  renderPlayerStatus() {
    if(Object.keys(this.state.player.status).length === 0) return
    
    return (
      <div>
        <p>Element: {this.state.player.status.extraElement}</p>
        <p>HP: {this.state.player.status.hp}</p>
        <p>MP: {this.state.player.status.mp}</p>
        <p>STR: {this.state.player.status.str}</p>
        <p>VIT: {this.state.player.status.vit}</p>
        <p>AGI: {this.state.player.status.agi}</p>
        <p>DEX: {this.state.player.status.dex}</p>
        <p>LUCK: {this.state.player.status.luck}</p>
      </div>
    )
  }

  render() {
    // console.log(this.state.player)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Monster Summoner</h2>
        </div>
        <h1>Choose your Monster</h1>
        <p>{this.state.player.name}</p>
        {this.renderPlayerStatus()}
        <a onClick={this.randomMonster} className="btn">Random</a>
      </div>
    );
  }
}

export default App;
