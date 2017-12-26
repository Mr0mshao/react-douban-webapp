import './index.less'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Registered extends Component {
  render () {
    return (
      <div classNameName='register-view'>
        <h1 classNameName="title">注册成功</h1>
      </div>
    )
  }
}
class Register extends Component {
  constructor () {
    super()
    this.state = {
      isShowPass: false,
      userEmail: '',
      userPwd: '',
      userName: ''
    }
  }
  _handleOnClikcShowPassWord () {
    this.setState({
      isShowPass: !this.state.isShowPass
    })
  }
  _handleOnChange (type, ev) {
    switch (type) {
      case 'email':
        this.setState({
          userEmail: ev.target.value
        })
        break;
      case 'pwd':
        this.setState({
          userPwd: ev.target.value
        })
        break;
      case 'name':
        this.setState({
          userName: ev.target.value
        })
        break;
      default: return null
    }
  }
  render () {
    const RegisterState = this.props.RegisterState
    return (
      <div className='register-view'>
        <h1 className="title">欢迎加入豆瓣</h1>
        <form method="post">
          <div className="form-alias">
            <label>
              <strong>邮箱</strong>
              <input
                type="text"
                placeholder="邮箱"
                value={this.state.userEmail}
                onChange={this._handleOnChange.bind(this, 'email')}
              />
            </label>
          </div>
          <div className="form-pwd">
            <label>
              <strong>请输入密码</strong>
              <input 
                placeholder="密码"
                type={this.state.isShowPass ? 'text' : 'password'}
                value={this.state.userPwd}
                onChange={this._handleOnChange.bind(this, 'pwd')}
              />
              <span 
                className={this.state.isShowPass ? 'show-pwd show': 'show-pwd'} 
                onClick={this._handleOnClikcShowPassWord.bind(this)}
              ></span>
            </label>
          </div>
          <div className="form-name">
            <label>
              <strong>用户名</strong>
              <input
                type="text"
                name="name"
                placeholder="用户名"
                value={this.state.userName}
                onChange={this._handleOnChange.bind(this, 'name')}
              />
            </label>
          </div>
          <div className="form-submit">
            <button className="submit" type="buttom" >{RegisterState}</button>
          </div>
        </form>
        <div className="footer">
          <div className="agreement">点击「注册」代表你已阅读并同意用户使用协议</div>
          <div className="btns">
            <a>下载豆瓣App</a>
          </div>
          <div className="btns">
            <Link to='/'>返回首页</Link>
          </div>
        </div>
      </div>
    )
  }
}
export { Register, Registered }