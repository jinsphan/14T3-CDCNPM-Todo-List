import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path : '/user-list',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ListUser = require('./containers/UserListContainer').default
      const listUserReducer = require('./modules/userList').default
      injectReducer(store, { key: 'listUserReducer', listUserReducer })
      cb(null, ListUser)
    }, 'listUser')
  }
})
