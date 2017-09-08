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
      totalPrice: 0,
      numItem: 0,
      selectedItem: '',
      stateOperation: '',
      msgWarn: false,
      modalIsOpen: false,
    }

    this.data = {}
    this.storeItem = {}

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

    const sumMoney = this.props.store.currentMoney - this.state.totalMoney

    // this.storeItem = {
    //   [this.state.selectedItem]: this.state.numItem
    // }

    if (this.props.store.selectedItem && this.props.store.selectedItem.hasOwnProperty(this.state.selectedItem)) {
      this.storeItem[this.state.selectedItem] =  this.props.store.selectedItem[this.state.selectedItem] + this.state.numItem
    } else {
      this.storeItem[this.state.selectedItem] = this.state.numItem
    }

    // let newStoreItems = {}
    // if(this.props.store.selectedItem) {
    //   newStoreItems = Object.assign({}, this.props.store.selectedItem, { [this.state.selectedItem] : newItems })
    // } else {
    //   newStoreItems = {[this.state.selectedItem] : newItems }
    // }
        

    this.setState({ currentMoney: sumMoney ,modalIsOpen: false }, () => {
      
      this.data = {
        currentMoney: this.state.currentMoney,
        selectedItem: this.storeItem
      }
     
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

  

  render() {

    const msgWarn = (this.state.msgWarn) ? 'Not Enough Money' : ''
    const disabled = (this.state.numItem > 0) ? false : true
    console.log(this.props.store)
    return (
      <div>

      $ {this.props.store.currentMoney}

      {/* <ShowMoney currentMoney={this.props.store.currentMoney} storeItem={this.props.store.selectedItem} /> */}

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
          <button  disabled={disabled} onClick={this.handleSubmitBuyItem}>OK</button>
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