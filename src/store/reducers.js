import { combineReducers } from 'redux'
import siteReducer from './site'
import toasts from './toasts'
import loginReducer from '../routes/Login/modules/login'
import listUserReducer from '../routes/App/User/UserList/modules/userList'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    site: siteReducer,
    toasts,
    auth: loginReducer,
    users: listUserReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
