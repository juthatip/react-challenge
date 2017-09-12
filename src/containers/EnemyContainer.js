import React , { Component } from 'react'
import { saveEnemy, fetchEnemy, clearEnemy } from '../actions'
import { connect } from 'react-redux'

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
            numberOfenemy: [1,2,3]
        }
        props.clearEnemy()
    }

    renderEnemy = () => {
        //number of enemy
        const numberOfenemy = this.randomItem(this.state.numberOfenemy)

        let enemy = []

        if(numberOfenemy) {
            for (var i = 1; i <= numberOfenemy; i++) {
                let hp = this.randomItem(this.state.hp)
                let attack = this.randomItem(this.state.attack)
                let element = this.randomItem(this.state.element)
                enemy.push({hp: hp, attack: attack, element: element})
            }
        }

        this.props.saveEnemy(enemy)

        console.log(enemy)
    } 

    randomItem(items) {
        const item = items[Math.floor(Math.random()*items.length)]
        return item
    }

    render() {
        console.log("this.props ==>", this.props.enemy)
        return (
            <div>
                <button onClick={this.renderEnemy} >Random Enemy</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        enemy: state.enemy
    }
}

export default connect(mapStateToProps, { saveEnemy, fetchEnemy, clearEnemy })(EnemyConainer)