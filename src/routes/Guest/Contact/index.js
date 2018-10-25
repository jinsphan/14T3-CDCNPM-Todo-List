export default (store) => ({
  path : '/lien-he',
  getComponent (nextState, cb) {
    window.scrollTo(0,0);
    require.ensure([], (require) => {
      const Contact = require('./components/Contact').default;
      cb(null, Contact)
    }, 'Contact')
  }
})
