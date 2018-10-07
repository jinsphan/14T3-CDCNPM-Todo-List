import GenerateServices from '../generateServices'

const Model = new GenerateServices(
  'users',
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
    findById: {
      url: '/',
      id: ''
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
      url: ':id',
      data: {
        id: ''
      }
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
