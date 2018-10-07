import GenerateServices from '../generateServices'
import PropTypes from '../types'

const Model = new GenerateServices(
  'services',
  {
    find: {
      url: '/',
      data: {
        filter: {
        }
      }
    },
    findByVisa: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            type: 'visa'
          }
        }
      }
    },
    findByTranslate: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            type: 'translate'
          }
        }
      }
    },
    findByAirTicket: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            type: 'air-ticket'
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
