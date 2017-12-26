import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.less'
export default class QuickNav extends Component {
  render () {
    return (
      <ul className="quick-nav">
        <li><Link to=''>影院热映</Link></li>
        <li><Link to=''>欧美新碟榜</Link></li>
        <li><Link to='/register'>注册账号</Link></li>
        <li><Link to='/login'>登录豆瓣</Link></li>
      </ul>
    )
  }
}