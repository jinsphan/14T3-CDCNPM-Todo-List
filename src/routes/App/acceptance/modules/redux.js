/**
 * Created by minmin on 10/9/18.
 */
import {VIEWING_USERS,ADD_USERS,DELETE_USERS,UPDATE_USERS} from './constant'
import {remove,findIndex} from 'lodash'
const initialState = {
  listUser : [
      
  ],
    viewingUser : {

    }
}
const updateUser = (item) => {
    let listUser = initialState.listUser;
    let index = findIndex(listUser,e=>{
        return e.id ===item.id
    })
    if (index >=0) {
        listUser[index] = item

    }
    return listUser
}
const addUser = (item) => {
    let listUser = initialState.listUser;
    listUser.push(item)
    return listUser
}
export default (state = initialState, action) => {
  switch (action.type) {

  case VIEWING_USERS:
    return { ...state, viewingUser: action.payload }
      case DELETE_USERS:
          return { ...state, listUser: remove(state.listUser, e => {return e.id ===action.payload.id}) }
      case UPDATE_USERS:
          return { ...state, listUser: updateUser(action.payload) }
      case ADD_USERS:
          return { ...state, listUser: addUser(action.payload) }


  default:
    return state
  }
}
