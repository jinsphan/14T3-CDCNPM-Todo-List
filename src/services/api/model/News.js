import GenerateServices from '../generateServices'
import PropTypes from '../types'

const Model = new GenerateServices(
  'news',
  {
    find: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
        }
      }
    },
    findNew: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          limit: 3
        }
      }
    },
    findByCompany: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            type: "ttb",
          }
        }
      }
    },
    findByTravel: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            type: "du-lich",
          }
        }
      }
    },
    findByCar: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            type: "xe",
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
      url: '/count',
      data: {
        filter: {
        }
      }
    },
  }
)

export default Model
