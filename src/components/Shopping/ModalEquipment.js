import React from 'react'

export default ({ selectedItem, closeModal, handleSubmitUpgrageItem, msgWarn, disabled }) => {
  return (
    <div>
      <p>{selectedItem}</p>

        <button onClick={closeModal}>cancel</button>
        <button disabled={disabled} onClick={handleSubmitUpgrageItem}>OK</button>

      <p>{msgWarn}</p>
    </div>
  )
}