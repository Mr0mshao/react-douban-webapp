import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './index.less'
export default class Header extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  handleOnClick () {
    console.log('xx')
  }
  render () {
    const onClick = this.props.onClick
    return (
      <div className="header-bar">
        <h1 className="title">
          <Link to='/'>豆瓣</Link>
        </h1>
        <ul className="nav">
          <li><Link style={{color: '#2384E8'}} to='/movie'>电影</Link></li>
          <li><Link style={{color: '#9F7860'}} to='/book'>图书</Link></li>
          <li><Link style={{color: '#E4A813'}} to='/statusviews'>广播</Link></li>
          <li><Link style={{color: '#2AB8CC'}} to='/group'>小组</Link></li>
        </ul>
        <span className="talion" onClick={onClick}></span>
      </div>
    )
  }
}