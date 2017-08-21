import React, { Component } from 'react'

class ShoppingContainers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      money: 10000
    }
  }


  render() {
    return (
      <div>
        <p>$ {this.state.money}</p>

        <ul className="list-item">
          <li>meet<p><a >buy</a></p></li>
          <li>water<p><a >buy</a></p></li>
          <li>candy<p><a >buy</a></p></li>
        </ul>

        <div>
          meet
          <span>-</span>
          <span>+</span>
        </div>
      </div>
    )
  }
}

export default ShoppingContainers