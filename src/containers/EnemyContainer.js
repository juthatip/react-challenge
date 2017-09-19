import React , { Component } from 'react'
import { saveEnemy, fetchEnemy, clearEnemy, saveBattle } from '../actions'
import { connect } from 'react-redux'
import Row from '../components/Enemy/Row'

class EnemyConainer extends Component {
    constructor(props) {
        super(props)

        // this.hp = ['50', '100', '200', '300']
        // this.attack = ['5','10','20','50']
        // this.element = ['fire', 'water', 'wind', 'earth']

        this.state = {
            hp: ['50', '100', '200', '300'],
            attack: ['5','10','20','50'],
            element: ['fire', 'water', 'wind', 'earth'],
            numberOfBoss: [1],
            numberOfenemy: [1,2,3],
            battle: [],
            battleRound: [{ round: 1, win: false }, { round: 2, win: false},{round: 3, win: false}],
            round: 0
        }

    }

    renderEnemy = () => {

      this.handleNextLevel()

    }


    handleNextLevel() {
      let level = []
      let gen
      let battle = []
      for(var n = 1; n <= 4; n++) {
        gen = this.generateEnemy(this.state.numberOfenemy)
        level.push(gen)
      }

      this.handleGenerateAllEnemy(level)

    }

    handleBoss() {
        let level = []
        let boss = this.generateEnemy(this.state.numberOfBoss)
            level.push(boss)
        this.handleGenerateAllEnemy(level)
    }



    handleGenerateAllEnemy(level) {

      this.props.saveEnemy(level)
      this.handleLevel()
    }
    
    generateEnemy = (n) => {
        const numberOfenemy = this.randomItem(n)
        let enemy = []        

        for (var i = 1; i <= numberOfenemy; i++) {
            let hp = this.randomItem(this.state.hp)
            let attack = this.randomItem(this.state.attack)
            let element = this.randomItem(this.state.element)
            enemy.push({hp: hp, attack: attack, element: element})
        }

        return enemy
        
    }

    handleLevel() {
      let battleRound = this.state.round
      let hp = this.state.hp
      let attack = this.state.attack
      let upHp
      let upAttack


      if(battleRound === 2) {
        upHp = this.handleUpgradeHpEnemy(hp, 2)
        upAttack = this.handleUpgrageAttackEnemy(attack, 2)
      } else if (battleRound === 3) {
        upHp = this.handleUpgradeHpEnemy(hp, 3)
        upAttack = this.handleUpgrageAttackEnemy(attack, 3)
      } else if (battleRound === 4) {
        upHp = this.handleUpgradeHpEnemy(hp, 4)
        upAttack = this.handleUpgrageAttackEnemy(attack, 4)
      } else {
        upHp = hp
        upAttack = attack
      }

      this.setState({hp: upHp, attack: upAttack})
    }

    handleUpgradeHpEnemy(hp, number) {
      return hp.map(n => n*number)
    }

    handleUpgrageAttackEnemy(attack, number) {
      return attack.map(n => n*number)
    }

    randomItem(items) {
        const item = items[Math.floor(Math.random()*items.length)]
        return item
    }

    handleFight = (e) => {
      // console.log(e.target.value)
      let btnNum = e.target.value

      console.log(btnNum)

      // console.log("handleFight ==>", this.props.enemy[0])
      this.setState({ battle: [e.target.value]}, () => {
        console.log(this.state.battle)
      })
    }

    render() {
        const enemy = this.props.enemy ? this.props.enemy : []
      // console.log(this.state.battle)

      return (
            <div>
                <button onClick={this.renderEnemy} >Random Enemy</button>
                {/* {this.renderAllEnemy()} */}
                { enemy.map((i, k) => {
                    return (
                      <Row data={i} handleFight={this.handleFight} battle={this.state.battle} key={k} index={k} />
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        enemy: state.enemy,
        battle: state.battle
    }
}

export default connect(mapStateToProps, { saveEnemy, fetchEnemy, clearEnemy, saveBattle })(EnemyConainer)