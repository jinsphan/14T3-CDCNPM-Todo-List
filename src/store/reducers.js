import { combineReducers } from 'redux'
import toasts from './toasts'
import site from './site'
import todos from "./todos";

import authen from './moduleAuthen/AuthRedux'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
      toasts,
      site : site,
      authen,
      todos,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
