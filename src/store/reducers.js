import { combineReducers } from 'redux'
import toasts from './toasts'
import site from './site'
import loginReducer from '../routes/Login/modules/login'
import listUserReducer from '../routes/App/User/UserList/modules/userList'

import employees from '../routes/App/employees/modules/redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    toasts,
    auth: loginReducer,
    users: listUserReducer,
    site : site,
    employees,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
