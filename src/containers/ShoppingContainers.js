import React, { Component } from 'react'

class ShoppingContainers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      money: 10000,
      numItem: 1,
      selectedItem: '',
      stateOperation: ''
    }

  }

  buyItem = (item) => {

    this.setState({ 
      selectedItem: item,
      numItem: 1
    })
    
    this.handleCalculateMoney(item)
  }

  decrease = () => {
    if(this.state.numItem !== 1) {
      this.handleNumberItem(-1, 'decrease')
    }

  }

  increase = () => {
    this.handleNumberItem(1, 'increase')
  }

  handleNumberItem(index, operator) {
    this.setState({
      numItem: this.state.numItem + index,
      stateOperation: operator
    })
  }

  handleCalculateMoney = () => {
    let price = 0;
    let selectedItem = this.state.selectedItem
    let numItem = this.state.numItem
    let stateOperation = this.state.stateOperation
    let totalPrice = 0;
   
    if(selectedItem === 'meat') {
      price = 2500
    } else if(selectedItem === 'water') {
      price = 1000
    } else if(selectedItem === 'candy') {
      price = 500
    }

    if(stateOperation === 'increase') {
      // console.log(price)
      totalPrice = numItem * price
    } else {
      console.log("numItem", numItem)
      console.log("price", price)
      totalPrice = price / numItem
    }
    console.log("==>", totalPrice)
    // this.setState({totalPrice: })

  }

  render() {
    // console.log(this.state.numItem)//
    return (
      <div>
        <p>$ {this.state.money}</p>

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
          <button onClick={this.handleCalculateMoney}>OK</button>
        </div>
      </div>
    )
  }
}

export default ShoppingContainers