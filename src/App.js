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
      {
        name: "monster02",
        status: {
          hp: 200,
          mp: 200,
          str: 200,
          vit: 200,
          agi: 200,
          dex: 200,
          luck: 0
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

    this.rareItem = {
      luck: 100
    }

    this.state = {
      player: {}
    }

  }

  randomMonster = () => {
    const monster = this.randomItem(this.monster)
    
    const elements = Object.keys(this.element)
    // let element = this.randomItem(elements)

    let element = 'fire'

    console.log(monster)

    let str = monster.status.str

    Object.keys(monster.status).forEach(function (a) {
      console.log(a)
      if(element === 'fire') {
        // element = 'str'

        str = str + 100
        console.log(str)
      }
    });

      console.log(this.player)

    // if(element === 'fire') {
    //   element = 'str'
      
    //   monster.filter((obj) => {
    //     console.log(obj.status)
    //   })
    // }else if (element === 'water') {
    //   element = 'dex'
    // }else if (element === 'wind') {
    //    element = 'agi'
    // }else if (element === 'earth') {
    //    element = 'vit'
    // }


    // this.setState({
    //   player: monster
    // })
  }

  randomItem(items) {
    const item = items[Math.floor(Math.random()*items.length)]

    return item
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Monster Summoner</h2>
        </div>
        <h1>Choose your Monster</h1>
        <p>{this.state.player.name}</p>
        <a onClick={this.randomMonster} className="btn">Random</a>
      </div>
    );
  }
}

export default App;
