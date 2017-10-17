import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    }
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick = (tabIndex) => {
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
    })
  }

  // Encapsulate <Tabs/> component API as props for <Tab/> children
  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick : this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  // Render current active tab content
  renderActiveTabContent() {
    const {children} = this.props;
    const {activeTabIndex} = this.state;
    if(children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <div className="tabs clear">
        <ul className="tabs-nav nav navbar-nav navbar-left">
          {this.renderChildrenWithTabsApiAsProps()}
        </ul>
        <div className="tabs-active-content">
          {this.renderActiveTabContent()}
        </div>
      </div>
    )
  }
}

export default Tabs

Tabs.propTypes = {
  defaultActiveTabIndex: PropTypes.number
}

Tabs.defaultProps = {
  defaultActiveTabIndex: 0
}