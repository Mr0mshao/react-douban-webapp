import './index.less'
import React, { Component } from 'react'
export default class Loading extends Component {
  render () {
    return (
      <div className='loading'>
        <img src="../../assets/loading_green.gif" alt="loading"/>
      </div>
    )
  }
}