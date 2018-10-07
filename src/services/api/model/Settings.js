import GenerateServices from '../generateServices'
import PropTypes from '../types'

const Model = new GenerateServices(
  'settings',
  {
    find: {
      url: '/',
      data: {
        filter: {
          order: 'type DESC',
        }
      }
    },
    findOne: {
      url: '/',
      data: {
        filter: {
          where: {
            name: ''
          }
        }
      }
    },
    findById: {
      url: ':id',
      data: {
        id: ''
      }
    },
    create: {
      url: '/',
      data: {

      }
    },
    update: {
      url: '/',
      data: {}
    },
    deleteById: {
      url: '/',
      id: ''
    },
    count: {
      url: '/count',
      data: {
        filter: {
          limit: 10
        }
      }
    },
  }
)

export default Model
