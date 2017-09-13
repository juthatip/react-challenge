import React , { Component } from 'react'
import { saveEnemy, fetchEnemy, clearEnemy } from '../actions'
import { connect } from 'react-redux'


const Row = ({data}) => {
    return (
        <div>
           {/* <li>HP: {data.hp}</li>
           <li>Attack: {data.attack}</li>
           <li>Element: {data.element}</li> */}
           {data.map((i, k)=> {
               return(
                <ul>
                    <Col key={k} data={i} index={k}/>
                </ul>
               )
            })}
            <button>Fight!</button>
            <br />
        </div>
    )
}

const Col = ({data, index}) => {
    console.log(index)
    return (
        <div>
            <li>
                <span>HP: {data.hp}</span>
                <span>Attack: {data.attack}</span>
                <span>Element: {data.element}</span>
            </li>
        </div>
    )
}

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
        // props.fetchEnemy()
    }

    renderEnemy = () => {

        let level = []
        let gen

        for(var n = 1; n <= 4; n++) {
            gen = this.generateEnemy()
            level.push(gen)
        }

        console.log("===>", level)

        this.props.saveEnemy(level)

    }

    generateEnemy = () => {
        const numberOfenemy = this.randomItem(this.state.numberOfenemy)
        let enemy = []        

        for (var i = 1; i <= numberOfenemy; i++) {
            let hp = this.randomItem(this.state.hp)
            let attack = this.randomItem(this.state.attack)
            let element = this.randomItem(this.state.element)
            enemy.push({hp: hp, attack: attack, element: element})
        }

        // console.log("==>", enemy)

        return enemy
        
    }

    randomItem(items) {
        const item = items[Math.floor(Math.random()*items.length)]
        return item
    }

    renderAllEnemy() {
        // if(this.props.enemy) {
        //     return this.props.enemy.map((i, k) => {
        //         return ( 
        //             i.map((e) =>  {
        //                 return (<p key={k}>{e.hp}</p>)
        //             })
        //         )
        //     })
        // }
    }


    render() {
        const enemy = this.props.enemy ? this.props.enemy : []

        console.log(enemy)
        return (
            <div>
                <button onClick={this.renderEnemy} >Random Enemy</button>
                {/* {this.renderAllEnemy()} */}
                { enemy.map((i, k) => {
                    return (
                        <div key={k}>
                            <Row key={k} data={i} />
                        </div>
                    )
                })}

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