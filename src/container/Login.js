import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Login } from '../components'
class LoginContainer extends Component {
  handleGoback () {
    this.props.history.goBack()
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log('xx', this.state)
  }
  render () {
    return (
      <Login
        handleGoback={this.handleGoback.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(LoginContainer)