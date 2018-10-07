import GenerateServices from '../generateServices'
import PropTypes from '../types'

const Model = new GenerateServices(
  'users',
  {
    login: {
      url: '/login',
      data: {
        email: PropTypes.String,
        password: PropTypes.String
      }
    },
    logout: {
      url: '/logout'
    }
  }
)

export default Model
