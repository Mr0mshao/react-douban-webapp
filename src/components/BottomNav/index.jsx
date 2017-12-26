import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
export default class BottomNav extends Component {
  constructor () {
    super()
    this.state = {
      isLogined: false
    }
  }
  render () {
    return (
      <div className="navBottom">
        <div className="nav-item">
          <Link to='/register'>注册账号</Link>
          {
            this.state.isLogined
            ?
              <a>退出登录</a>
            :
              <Link to='/login'>登录豆瓣</Link>
          }
        </div>
        <div className="nav-item">
          <a href="https://movie.douban.com/">使用桌面版</a>
          <a>使用豆瓣</a>
        </div>
      </div>
    )
  }
}