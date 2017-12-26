// action type
export const types = {
  SIGIN_IN: 'LOGIN_IN', //登录
  SIGIN_OUT: 'SIGIN_OUT', // 登出
  SIGIN_UP: 'SIGIN_UP',//注册
}
const initState = {
  userName: window.localStorage.getItem('username') || '',
  userPassword: window.localStorage.getItem('userpassword') || ''
}
// reducer
export default function reducer (state = initState, action) {
  switch (action.type) {
    case 'SIGIN_IN':
      return Object.assign({}, state, {})
    case 'SIGIN_UP':
      return Object.assign({}, state, {})
    case 'SIGIN_OUT':
      return Object.assign({}, state, {})
    default: return state
  }
}


// action create
export const actions = {
  siginIn: (form) => {},
  siginUp: (form) => {
    return dispatch => {
      if (!form) Promise.reject(new Error('用户名或密码错误！'))
      window.localStorage.setItem('username', form.userName)
      window.localStorage.setItem('userpassword', form.userPassword)
      // dispatch({
      //   type: 'SIGIN_IN',

      // })
      console.log(form)
    }
  },
  siginOut: () => {}
}


