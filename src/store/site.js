import browserHistory from 'react-router/lib/browserHistory'
import SettingModel from "../services/api/model/Settings";

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'
export const OPEN_DROPDOWN = 'OPEN_DROPDOWN'
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    location
  }
}
export function openDropdown (isDropdown) {
  return {
    type    : OPEN_DROPDOWN,
    isDropdown
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

export const updateDropdown = (dropdownName) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : OPEN_DROPDOWN,
          dropdownName
        })
        resolve()
      }, 200)
    })
  }
}
export const showNotification = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : SHOW_NOTIFICATION,
          isShowNotification: true
        })
        resolve()
      }, 200)
    })
  }
}
export const hideNotification = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : HIDE_NOTIFICATION,
          isShowNotification: false
        })
        resolve()
      }, 200)
    })
  }
}

export const getSettings = () => {
  return (dispatch) => {
    SettingModel.find().then( async (res)=>{
      const settings = {}
      await res.data.forEach( item => {
        settings[item.key] = item.value
      });
      dispatch({
        type    : FETCH_SETTINGS_SUCCESS,
        settings
      })
    })
  }
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  location: browserHistory.getCurrentLocation(),
  dropdownName: '',
  isShowNotification: false,
  settings: {
    appName : 'ttb-app',
    phone : '‎ 0236 3 749358',
    hotLine : '‎0987 877 888 (Ms. Hương)',
    email : 'sales@ttblogistics.com',
    address : '39-41 đường Quang Trung, quận Hải Châu, Tp. Đà Nẵng'
  }
}
export default function locationReducer (state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return { ...state, location: action.location }
    case FETCH_SETTINGS_SUCCESS:
      return { ...state, settings: action.settings }
    case OPEN_DROPDOWN:
      return { ...state, dropdownName: action.dropdownName }
    case SHOW_NOTIFICATION:
      return { ...state, isShowNotification: action.isShowNotification }
    case HIDE_NOTIFICATION:
      return { ...state, isShowNotification: action.isShowNotification }
    default:
      return state
  }
}
