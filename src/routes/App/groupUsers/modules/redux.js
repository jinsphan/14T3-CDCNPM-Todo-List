/**
 * Created by minmin on 10/9/18.
 */
import {VIEWING_GROUP_USER,ADD_GROUP_USER,UPDATE_GROUP_USER,DELETE_GROUP_USER} from './constant'
import {remove,findIndex} from 'lodash'
const initialState = {
  listGroupUser : [

  ],
    viewingGroupUser : {}
};

const addGrUser = (item) => {
  let list = initialState.listGroupUser;
  list.push(item);
  return list;
};
const updateGrUser = (item) => {
    let list = initialState.listGroupUser;
    let index = findIndex(list,e => {return e.id === item.id});
    list[index] = item;
    return list;
};

export default (state = initialState, action) => {
  switch (action.type) {

      case VIEWING_GROUP_USER:
          return { ...state, viewingGroupUser:action.payload };

      case DELETE_GROUP_USER:
          return { ...state, listGroupUser: remove(state.listGroupUser, e => {return e.id !== action.payload.id}) };

      case ADD_GROUP_USER:
          return { ...state, listGroupUser: addGrUser(action.payload) };

      case UPDATE_GROUP_USER:
          return { ...state, listGroupUser: updateGrUser(action.payload) };

  default:
    return state
  }
}
