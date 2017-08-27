import React, { Component } from 'react'
import ShowMoney from '../components/Shopping'
import { connect } from 'react-redux'
import { fetchStorage } from '../actions'

class StorageContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
            console.log("this.props.store==>", this.props.store)

        return (
            <div>
                storage
                <ShowMoney money={this.props.store} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state.store.money
    }
}

export default connect(mapStateToProps, { fetchStorage })(StorageContainer)