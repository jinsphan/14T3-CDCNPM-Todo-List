import GenerateServices from '../generateServices'
import PropTypes from '../types'

const Model = new GenerateServices(
  'cars',
  {
    find: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
        }
      }
    },
    findBySelfDriving: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            formRent: 'tu-lai'
          }
        }
      }
    },
    findBySelfContract: {
      url: '/',
      data: {
        filter: {
          order: 'id DESC',
          where: {
            formRent: 'hop-dong'
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
