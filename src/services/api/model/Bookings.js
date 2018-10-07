import GenerateServices from '../generateServices'
import PropTypes from '../types'

const Model = new GenerateServices(
  'bookings',
  {
    find: {
      url: '/',
      data: {
        filter: {
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
    findByStatus: {
      url: '/',
      data: {
        filter: {
          where: {
            status: 'Pending'
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
        }
      }
    },
  }
)

export default Model
