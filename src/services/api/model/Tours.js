import GenerateServices from '../generateServices'
import PropTypes from '../types'

const Model = new GenerateServices(
  'tours',
  {
    find: {
      url: '/',
      data: {
        filter: {
        }
      }
    },
    findByTravel: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            type: 'travel'
          }
        }
      }
    },
    findByDistance: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            type: 'distance'
          }
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
      url: '/',
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
      url: '/count'
    },
  }
)

export default Model
