import React from 'react'

export default ({selectedItem, decrease, increase, numItem, closeModal, disabled, handleSubmitBuyItem, msgWarn}) => {
  return (
    <div>
      <p>{selectedItem}</p>
      <button onClick={decrease}>-</button>
      &nbsp;{numItem}&nbsp;
              <button onClick={increase}>+</button>
      <p>
        <button onClick={closeModal}>cancel</button>
        <button disabled={disabled} onClick={handleSubmitBuyItem}>OK</button>
      </p>
      <p>{msgWarn}</p>
    </div>
  )
}