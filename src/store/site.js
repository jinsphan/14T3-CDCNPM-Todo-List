import browserHistory from 'react-router/lib/browserHistory'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'
export const OPEN_DROPDOWN = 'OPEN_DROPDOWN'
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    location
  }
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


// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  location: browserHistory.getCurrentLocation(),
  dropdownName: '123',
  isShowNotification: false,
}
export default function locationReducer (state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return { ...state, location: action.location }
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
