/**
 * Created by minmin on 10/9/18.
 */
import {} from './constant'
const initialState = {
  listRoles : [
      
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case typeName:
    return { ...state }

  default:
    return state
  }
}
