import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Register } from '../components'
class RegisterContainer extends Component {
  constructor () {
    super()
    this.state = {
      registerState: '立即注册'
    }
  }
  render () {
    return (
      <Register 
        RegisterState={this.state.registerState}
      />
    )
  }
}
export default connect()(RegisterContainer)