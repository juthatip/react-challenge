import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { saveStorage, fetchStorage } from '../actions'
import ShowMoney from '../components/Shopping'

const customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    textAlign             : 'center',
    width                 : '30%',
    height                : '30%'
  }
}

class ShoppingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalMoney: '',
      currentMoney: 10000,
      totalPrice: 0,
      numItem: 0,
      selectedItem: '',
      stateOperation: '',
      msgWarn: false,
      modalIsOpen: false,
      storeItem: {}
    }

    this.data = {}

    props.fetchStorage(this.props.store)
  }

  buyItem = (item) => {
    this.setState({
      selectedItem: item,
      numItem: 0,
      modalIsOpen: true
    })
  }

  decrease = () => {
    if(this.state.numItem > 0) {
      this.handleNumberItem(-1, 'decrease')

      if(this.state.msgWarn) {
        this.setState({ msgWarn: false })
      }
    }

  }

  increase = () => {
    if(!this.state.msgWarn) {
      this.handleNumberItem(1, 'increase')
    }
  }

  handleNumberItem(index, operator) {

      this.setState({ numItem: this.state.numItem + index }, () => {
        this.handleCalculateMoney()
      })
  
  }

  handleCalculateMoney = () => {
    let price = 0;
    let selectedItem = this.state.selectedItem
    let numItem = this.state.numItem
    let stateOperation = this.state.stateOperation
    let totalPrice = this.state.totalPrice;
    let currentMoney = this.state.currentMoney;
   
    if(selectedItem === 'meat') {
      price = 2500
    } else if(selectedItem === 'water') {
      price = 1000
    } else if(selectedItem === 'candy') {
      price = 500
    }

    totalPrice = price * numItem
    currentMoney = currentMoney - totalPrice

    if(currentMoney < 0) {
      this.setState({ msgWarn: true, numItem: this.state.numItem - 1 })
      currentMoney = 0
      totalPrice = totalPrice - price
    }

    this.setState({ totalMoney: totalPrice })

  }

  handleSubmitBuyItem = () => {
    const sumMoney = this.state.currentMoney - this.state.totalMoney

    let storeItem = []

    storeItem.push({selectedItem: this.state.selectedItem, numItem: this.state.numItem})

    this.setState({ currentMoney: sumMoney, storeItem: storeItem ,modalIsOpen: false }, () => {

      this.data = {
        currentMoney: this.state.currentMoney,
        storeItem: this.state.storeItem
      }

      // console.log("==>" ,this.state.storeItem)
      this.props.saveStorage(this.data)
    })

  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  renderMoney() {
    if(!this.props.store) return

    return <ShowMoney money={this.props.store} />
  }

  render() {

    const msgWarn = (this.state.msgWarn) ? 'Not Enough Money' : ''

    console.log("this.props.store==>", this.props.store)

    

    return (
      <div>

      <ShowMoney money={this.props.store.currentMoney} selectedItem={this.props.store.storeItem} />

        <ul className="list-item">
          <li>meat
            <p>$2500</p>
            <p><button onClick={this.buyItem.bind(this, 'meat')}>buy</button></p>
          </li>
          <li>water
            <p>$1000</p>
            <p><button onClick={this.buyItem.bind(this, 'water')}>buy</button></p>
          </li>
          <li>candy
            <p>$500</p>
            <p><button onClick={this.buyItem.bind(this, 'candy')}>buy</button></p>
          </li>
        </ul>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={this.state.selectedItem}
        >
          <p>{this.state.selectedItem}</p>
          <button onClick={this.decrease}>-</button>
          &nbsp;{this.state.numItem}&nbsp;
          <button onClick={this.increase}>+</button> 
          <p>{msgWarn}</p>
          <button onClick={this.closeModal}>cancel</button>
          <button onClick={this.handleSubmitBuyItem}>OK</button>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    store: state.store
  }
}

export default connect(mapStateToProps, { saveStorage , fetchStorage })(ShoppingContainer)