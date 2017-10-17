import React from 'react'
import PropTypes from 'prop-types'

const Tab = (props) => {
  return (
    <li className="tab">
      <a className={`tab-link ${props.linkClassName} ${props.isActive ? 'active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          props.onClick(props.tabIndex);
        }}>
        <i className={`tab-icon ${props.iconClassName}`}/>
        {props.tabName}
      </a>
    </li>
  )
}

Tab.propTypes = {
  onClick      : PropTypes.func,
  tabIndex     : PropTypes.number,
  isActive     : PropTypes.bool,
  iconClassName: PropTypes.string.isRequired,
  linkClassName: PropTypes.string.isRequired
}

export default Tab