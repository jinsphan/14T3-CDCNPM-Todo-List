import { combineReducers } from 'redux'
import toasts from './toasts'
import site from './site'
import loginReducer from '../routes/Login/modules/login'

import employees from '../routes/App/employees/modules/redux'
import groupUsers from '../routes/App/groupUsers/modules/redux'
import users from '../routes/App/users/modules/redux'
import authen from './moduleAuthen/AuthRedux'
import roles from '../routes/App/roles/modules/redux'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
      toasts,
      auth: loginReducer,
      site : site,
      employees,
      groupUsers,
      roles,
      users,
      authen,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
