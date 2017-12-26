/*
 * @Author: mr.mshao 
 * @Date: 2017-10-24 10:42:34 
 * @Last Modified by: mr.mshao
 * @Last Modified time: 2017-10-24 17:21:54
 */
import './index.less'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Login extends Component {
  constructor () {
    super()
    this.state = {
      loginState: '立即登录',
      isDisabled: true,
      isShow: false,
      errMsg: '',
      email: '',
      password: ''
    }
  }
  showPassword () {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  handleChange (field, value) {
    switch (field) {
      case 'password': 
        this.setState({
          password: value
        })
        break;
      case 'email':
        this.setState({
          email: value
        })
        break;
      default: return
    }
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log('xx')
  }
  render () {
    const { errMsg, email, password, isDisabled, loginState, isShow } = this.state
    const { handleGoback, handleSubmit } = this.props
    return (
      <div className="login-view">
        <h1><a onClick={handleGoback}>取消</a>登录豆瓣</h1>
        <form onSubmit={handleSubmit}>
          {errMsg?<p className="tip error">{errMsg}</p>:null}
          <div className="form-user">
            <label>
              <strong>邮箱</strong>
              <input
                placeholder="邮箱"
                type="email"
                name="email"
                value={email}
                onChange={(e)=>this.handleChange('email', e.target.value)}
              />
            </label>
          </div>
          <div className="form-pwd">
            <label>
              <strong>请输入密码</strong>
              <input
                name="password"
                placeholder="密码"
                value={password}
                type={isShow?'text':'password'}
                onChange={(e)=>this.handleChange('password', e.target.value)}
              />
              <span
                className={isShow ? 'show show-pwd' : 'show-pwd'}
                onClick={this.showPassword.bind(this)}
              />
            </label>
          </div>
          <div>
            <button type="submit"
              disabled={isDisabled}
              className={isDisabled ? 'submit disabled' : 'submit'}
            >
              {loginState}
            </button>
          </div>
        </form>
        <div className="footer">
          <div className="more-login">使用其他方式登录 &amp; 找回密码</div>
          <div className="btns">
            <Link to="/">注册豆瓣帐号</Link>
            <a>下载豆瓣App</a>
          </div>
        </div>
      </div>
    )
  }
}