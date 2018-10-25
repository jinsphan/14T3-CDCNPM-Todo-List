import { injectReducer } from '../../../store/reducers'
import {browserHistory} from 'react-router'
export default (store) => ({
  path : '/tin-tuc/:id',
  getComponent (nextState, cb) {
    window.scrollTo(0,0);

    const param = nextState.params.id;
    const arrayParams = ['du-lich-mien-trung', 'thong-tin-thue-xe','tin-tuc-va-su-kien'];
    if(arrayParams.indexOf(param) === -1)
    {
      browserHistory.replace('/')
    }
    require.ensure([], (require) => {
      const News = require('./components/News').default;
      cb(null, News)
    }, 'News')
  }
})
