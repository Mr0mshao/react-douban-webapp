import './index.less'
import List from './list'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BottomNav } from '../index'
export default class AlertViewContainer extends Component {
  static propTypes = {
    isShowAlert: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }
  render () {
    const { isShowAlert, onClick } = this.props
    return (
      isShowAlert
      ?
        <div className="talion-view">
          <div className="header-bar">
            <span className="close-talion" onClick={onClick}>关闭</span>
            <input type="search" name="query" />
          </div>
          <List/>
          <BottomNav />
        </div>
      :
        null
    )
  }
}
