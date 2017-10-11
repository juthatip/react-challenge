import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { saveStorage, fetchStorage, fetchEquipment, fetchEquipmentData, saveEquipmentData } from '../actions'
import ShowMoney from '../components/Shopping'
import Equipment from '../components/Shopping/Equipment'
import ModalFood from '../components/Shopping/ModalFood'
import ModalEquipment from '../components/Shopping/ModalEquipment'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '30%',
    height: '30%'
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
      priceItem: 0,
      stateOperation: '',
      msgWarn: false,
      modalIsOpen: false,
      equipmentLevel: [{ title: 'sword', level: 1 }, { title: 'armour', level: 1 }, { title: 'boot', level: 1 }],
      btn: null
    }

    this.data = {}
    this.storeItem = {}
    this.currentMoney = this.props.store.currentMoney,
      this.equipmentData = []

    props.fetchStorage(this.props.store)
    props.fetchEquipment()
    props.fetchEquipmentData(this.state.equipmentLevel)

  }

  buyItem = (item, e) => {
    this.setState({
      selectedItem: item,
      numItem: 0,
      modalIsOpen: true,
      btn: e.target.value
    }, () => {
      if (this.state.btn === 'item-upgrade') {
        this.handleCalculateEquipment()
      }
    })

  }

  decrease = () => {
    if (this.state.numItem > 0) {
      this.handleNumberItem(-1, 'decrease')

      if (this.state.msgWarn) {
        this.setState({ msgWarn: false })
      }
    }

  }

  increase = () => {
    if (!this.state.msgWarn) {
      this.handleNumberItem(1, 'increase')
    }
  }

  handleNumberItem(index, operator) {

    this.setState({ numItem: this.state.numItem + index }, () => {
      this.handleCalculateMoney()
    })

  }

  calculateShoppingCart(price, item) {
    let totalPrice = price * item

    this.calculateCurrentMoney(totalPrice)

  }

  calculateCurrentMoney(totalPrice) {

    this.currentMoney = this.props.store.currentMoney - totalPrice

    if (this.currentMoney < 0) {
      this.setState({ msgWarn: true, numItem: this.state.numItem - 1, })
    }

  }

  handleCalculateMoney = () => {
    let price
    let selectedItem = this.state.selectedItem
    let numItem = this.state.numItem
    let stateOperation = this.state.stateOperation


    if (selectedItem === 'meat') {
      price = 2500
    } else if (selectedItem === 'water') {
      price = 1000
    } else if (selectedItem === 'candy') {
      price = 500
    }

    this.setState({ priceItem: price }, () => {
      this.calculateShoppingCart(price, this.state.numItem)
    })

  }

  handleCalculateEquipment = () => {

    
    let price = null

    for (let i = 0; i < this.props.equipmentData.length; i++) {
      if (this.props.equipmentData[i].title === this.state.selectedItem) {
        price = this.props.equipmentData[i].price
      }
    }

    this.setState({ priceItem: price }, ()=> {
      this.handleCalculateMoneyEquipment()
    })
  }

  handleCalculateMoneyEquipment = () => {
    this.currentMoney = this.props.store.currentMoney - this.state.priceItem
    if(this.currentMoney < 0) {
      this.setState({ msgWarn: true })
    }
  }

  handleSubmitBuyItem = () => {

    let total = this.state.priceItem * this.state.numItem
    let sum = this.props.store.currentMoney - total

    // this.storeItem = {
    //   [this.state.selectedItem]: this.state.numItem
    // }

    if (this.props.store.selectedItem && this.props.store.selectedItem.hasOwnProperty(this.state.selectedItem)) {
      this.storeItem = Object.assign({}, this.props.store.selectedItem, { [this.state.selectedItem]: this.props.store.selectedItem[this.state.selectedItem] + this.state.numItem })
    } else {
      this.storeItem = Object.assign({}, this.props.store.selectedItem, { [this.state.selectedItem]: this.state.numItem })
    }



    this.setState({ currentMoney: sum, modalIsOpen: false }, () => {

      this.data = {
        currentMoney: this.state.currentMoney,
        selectedItem: this.storeItem
      }

      this.props.saveStorage(this.data)
    })


  }

  handleSubmitUpgrageItem = () => {

    let sum = this.props.store.currentMoney - this.state.priceItem

    console.log("sum", this.state.priceItem)


    let equipmentLevel = this.props.equipmentData

    for (let i = 0; i < equipmentLevel.length; i++) {
      if (equipmentLevel[i].title === this.state.selectedItem) {
        equipmentLevel[i].level = equipmentLevel[i].level + 1
        equipmentLevel[i].price = equipmentLevel[i].price * 2
      }
    }

    // console.log("submit", this.props.equipmentData)
    this.setState({ modalIsOpen: false });
    this.props.saveEquipmentData(this.props.equipmentData)

    this.setState({currentMoney: sum}, () => {
      this.data = {
        currentMoney: this.state.currentMoney
      }
  
      this.props.saveStorage(this.data)
    })
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });

    if (this.state.msgWarn) {
      this.setState({ msgWarn: false })
    }
  }

  renderModalItem = () => {
    const msgWarn = (this.state.msgWarn) ? 'Not Enough Money' : ''
    const disabled = (this.state.numItem > 0) ? false : true
    const disabledButton = msgWarn ? true : false
    if (this.state.btn === 'item-food') {
      return (
        <ModalFood
          selectedItem={this.state.selectedItem}
          decrease={this.decrease}
          increase={this.increase}
          numItem={this.state.numItem}
          closeModal={this.closeModal}
          disabled={disabled}
          handleSubmitBuyItem={this.handleSubmitBuyItem}
          msgWarn={msgWarn}
        />

      )
    } else {
      return (
        <ModalEquipment
          selectedItem={this.state.selectedItem}
          handleSubmitUpgrageItem={this.handleSubmitUpgrageItem}
          closeModal={this.closeModal}
          msgWarn={msgWarn}
          disabled={disabledButton}
        />
      )
    }
  }


  render() {

    return (
      <div>

        $ {this.props.store.currentMoney}

        {/* <ShowMoney currentMoney={this.props.store.currentMoney} storeItem={this.props.store.selectedItem} /> */}

        <div>Food</div>
        <ul className="list-item">
          <li>meat
            <p>$2500</p>
            <p><button onClick={this.buyItem.bind(this, 'meat')} value="item-food">buy</button></p>
          </li>
          <li>water
            <p>$1000</p>
            <p><button onClick={this.buyItem.bind(this, 'water')} value="item-food">buy</button></p>
          </li>
          <li>candy
            <p>$500</p>
            <p><button onClick={this.buyItem.bind(this, 'candy')} value="item-food">buy</button></p>
          </li>
        </ul>

        <Equipment data={this.props.equipmentData} buyItem={this.buyItem} />

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={this.state.selectedItem}
        >

          {this.renderModalItem()}


        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    store: state.store,
    equipment: state.equipment,
    equipmentData: state.equipmentData
  }
}

export default connect(mapStateToProps, { saveStorage, fetchStorage, fetchEquipment, fetchEquipmentData, saveEquipmentData })(ShoppingContainer)