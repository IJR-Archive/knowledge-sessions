import React, { Component, PropTypes } from 'react'

export default class Page extends Component {
  render () {
    const { name } = this.props

    return (
      <div>
        <h1>Hi {name}!</h1>
      </div>
    )
  }
}

Page.propTypes = {
  name: PropTypes.string.isRequired
}
