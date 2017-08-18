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
          luck: 0
        }
      },
      // {
      //   name: "monster02",
      //   status: {
      //     hp: 200,
      //     mp: 200,
      //     str: 200,
      //     vit: 200,
      //     agi: 200,
      //     dex: 200,
      //     luck: 0
      //   }
      // },
      {
        name: "monster03",
        status: {
          hp: 300,
          mp: 300,
          str: 300,
          vit: 300,
          agi: 300,
          dex: 300,
          luck: 0
        }
      },
    ]

    this.element = {
      fire:  100,
      water: 100,
      wind:  100,
      earth: 100
    }

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
    let element = this.randomItem(elements)

    const rareItem = this.randomItem(this.rareItem)

    console.log(rareItem)

    //1. get element
    // let element = 'fire'
    //2. get monster match element with status

    // console.log("1 ====" , monster)
    // Object.keys(monster.status).forEach(function (a) {
    //   console.log(a)
    //   if(element === 'fire') {
    //     // element = 'str'

    //     str = str + 100
    //     console.log(str)
    //   }
    // });

      // console.log(this.player)
    let status

    if(element === 'fire') {
      status = 'str'
    }else if (element === 'water') {
      status = 'dex'
    }else if (element === 'wind') {
      status = 'agi'
    }else if (element === 'earth') {
      status = 'vit'
    }

    player.status[status] += 100

   // console.log("before", player.status[status] + 100)
    
    this.setState({
      player: player
    })

    //console.log("after", this.state.player)
  }

  randomItem(items) {
    console.log(items)
    const item = items[Math.floor(Math.random()*items.length)]
    console.log(items.length)
    return item
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
        <p>HP: {this.state.player.status.hp}</p>
        <p>MP: {this.state.player.status.mp}</p>
        <p>STR: {this.state.player.status.str}</p>
        <p>VIT: {this.state.player.status.vit}</p>
        <p>AGI: {this.state.player.status.agi}</p>
        <p>DEX: {this.state.player.status.dex}</p>
        <p>LUCK: {this.state.player.status.luck}</p>
        <a onClick={this.randomMonster} className="btn">Random</a>
      </div>
    );
  }
}

export default App;
