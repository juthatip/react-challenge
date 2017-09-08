import React, { Component } from 'react'
import ShowMoney from '../components/Shopping'
import { connect } from 'react-redux'
import { fetchStorage , saveStorage , saveMonster, fetchMonster } from '../actions'

class StorageContainer extends Component {
    constructor(props) {
        super(props)

        // props.fetchStorage(this.props.store)
        props.fetchMonster()
    }

    handleMeat = () => {

        if(this.props.store.selectedItem.meat > 0){
            this.props.store.selectedItem.meat =  this.props.store.selectedItem.meat - 1

            this.props.saveStorage(this.props.store)

            if(this.props.monster.status.stamina <= 100 && this.props.monster.status.stamina >= 0) {
                let stamina = 0

                stamina = this.props.monster.status.stamina + 50

                if(stamina > 100) {
                    this.props.monster.status.stamina = 100
                } else {
                    this.props.monster.status.stamina = stamina
                }


                this.props.saveMonster(this.props.monster)
            }



        }

    }

    render() {

        console.log(this.props.store)
        // console.log(this.props.monster)
        return (
            <div>
                <ShowMoney currentMoney={this.props.store.currentMoney} storeItem={this.props.store.selectedItem} handleMeat={this.handleMeat}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state.store,
        monster: state.monster
    }
}

export default connect(mapStateToProps, {  saveStorage, saveMonster, fetchMonster })(StorageContainer)