import React, { Component } from 'react'
import ShowMoney from '../components/Shopping'
import { connect } from 'react-redux'
import { fetchStorage } from '../actions'

class StorageContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                storage
                <ShowMoney currentMoney={this.props.store.currentMoney} storeItem={this.props.store.selectedItem} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state.store
    }
}

export default connect(mapStateToProps, { fetchStorage })(StorageContainer)