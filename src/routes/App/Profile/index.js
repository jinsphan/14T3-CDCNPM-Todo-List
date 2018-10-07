export default (store) => ({
  path : '/app/profile',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Profile = require('./components/Profile').default
      cb(null, Profile)
    }, 'profile')
  }
})
