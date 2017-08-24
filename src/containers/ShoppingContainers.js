import React, { Component } from 'react'

class ShoppingContainers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalMoney: '',
      currentMoney: 10000,
      totalPrice: 0,
      numItem: 0,
      selectedItem: '',
      stateOperation: '',
      msgWarn: false
    }
  }

  buyItem = (item) => {
    this.setState({
      selectedItem: item,
      numItem: 0
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

    // console.log(currentMoney)

    if(currentMoney < 0) {
      this.setState({ msgWarn: true, numItem: this.state.numItem - 1 })
      currentMoney = 0
      totalPrice = totalPrice - price
    }

    this.setState({ totalMoney: totalPrice })

  }

  handleSubmitBuyItem = () => {
    const sumMoney = this.state.currentMoney - this.state.totalMoney
    // console.log(this.state.currentMoney)
    // console.log(this.state.totalMoney)
    // console.log(sumMoney)

    this.setState({ currentMoney: sumMoney })

    console.log(this.state.currentMoney)
  }

  render() {

    const msgWarn = (this.state.msgWarn) ? 'Not Enough Money' : ''
    // console.log(this.state.msgWarn)

    return (
      <div>
        <p>$ {this.state.currentMoney}</p>

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

        <div className="clear">
          {this.state.selectedItem}
          <button onClick={this.decrease}>-</button>
          <button onClick={this.increase}>+</button>
          {this.state.numItem} items 
          <p>{msgWarn}</p>
          <button onClick={this.handleSubmitBuyItem}>OK</button>
        </div>
      </div>
    )
  }
}

export default ShoppingContainers