import { browserHistory } from 'react-router'
import { config } from '../../../services/api/index'
// import { fetchProperties } from '../../App/News/BookingsList/modules/realestateList'
import Auth from '../../../services/api/model/Auth'
import User from '../../../services/api/model/User'
import { errorAlert } from '../../../components/Alert'
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function loginSuccess () {
  return {
    type    : LOGIN_SUCCESS
  }
}
export function getUserInfoSuccess (userInfo) {
  return {
    type    : GET_USER_INFO_SUCCESS,
    userInfo
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
export const checkLogin = () => {
  return (dispatch) => {
    const id = localStorage.getItem('id')
    const userId = localStorage.getItem('userId')
    if (id) {
      config.set('access_token', id)
      dispatch(getUserInfo(userId))
    } else {
      browserHistory.replace('/login')
    }
  }
}

const getUserInfo = (userId) => {
  return (dispatch) => {
    User.findById(userId).then(res => {
      dispatch(getUserInfoSuccess(res.data))
    }).catch(e => {
      localStorage.clear()
      browserHistory.push('/login')
    })
  }
}
export const login = (email, password) => {
  return (dispatch, getState) => {
    Auth.login({
      email,
      password
    })
      .then(res => {
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('userId', res.data.userId)
        dispatch(loginSuccess())
        browserHistory.push('/app')
      })
      .catch(e => {
        errorAlert(
          'Error fail',
          e.message,
          'Try again',
        )
      })
  }
}

export const actions = {
  login,
  checkLogin
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_SUCCESS]    : (state, action) => ({ ...state, isLogin: true }),
  [GET_USER_INFO_SUCCESS]    : (state, action) => ({ ...state, isLogin: true, userInfo: action.userInfo }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLogin: false,
  userInfo: {
    name: ''
  }
}
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
