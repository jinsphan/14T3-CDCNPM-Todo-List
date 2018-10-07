import Validator from 'validatorjs'
import request from './request'
import config from './config'
const buildMethod = (moduleName) => {
  let method
  if (
    moduleName === 'login' ||
    moduleName === 'logout' ||
    moduleName === 'create'
  ) {
    method = 'POST'
  } else if (
    moduleName === 'update'
  ) {
    method = 'PATCH'
  } else if (
    moduleName === 'deleteById'
  ) {
    method = 'DELETE'
  } else {
    method = 'GET'
  }
  return method
}

const makeCall = (modelName, moduleName, params, data) => {
  const {
    url,
    method = buildMethod(moduleName)
  } = params
  const modelSchema = params.data || {}
  let apiUrl = modelName + url
  const token = config.get('access_token') || ''

  if (method.toLowerCase() !== 'get') {
    const validation = new Validator(data, modelSchema)
    if (validation.fails()) {
      // let err = validation.errors.all();
      Object.keys(modelSchema).map((key) => {
        if (validation.errors.first(key)) {
          // console.log(validation.errors.first(key));
          // message.warning(validation.errors.first(key))
        }
      })

      return null
    }
    if (moduleName === 'deleteById') {
      if (token) {
        apiUrl += `${data}?access_token=${token}`
      }
      if (validation.passes()) {
        return request({
          url: apiUrl,
          method,
        })
      }
    } else if (moduleName === 'update') {
      // console.log('update')
      if (token) {
        apiUrl += `${data.id}?access_token=${token}`
      }
      return request({
        url: apiUrl,
        method,
        data
      })
    } else if (moduleName === 'login') {
      return request({
        url: apiUrl,
        method,
        data
      })
    } else {
      if (token) {
        apiUrl += `?access_token=${token}`
      }
      if (validation.passes()) {
        return request({
          url: apiUrl,
          method,
          data
        })
      }
    }
  } else {
    if (moduleName === 'findById') {
      apiUrl += `${data}${token && `?access_token=${token}`}`
      return request({
        url: apiUrl,
        method
      })
    } else {
      // if (token) {
      //   data.access_token = token
      // }

      return request({
        url: apiUrl,
        method,
        data : data ? data : params.data
      })
    }
  }
}
export default function Services (modelName, actions) {
  const controller = {}

  for (let moduleName in actions) {
    controller[moduleName] = makeCall.bind(this, modelName, moduleName, actions[moduleName])
  }

  return controller
};
