/**
 * Created by minmin on 10/9/18.
 */
import {VIEWING_GROUP_USER,ADD_GROUP_USER,UPDATE_GROUP_USER,DELETE_GROUP_USER} from './constant'
import {remove,findIndex} from 'lodash'
const initialState = {
  listGroupUser : [
      {
          dateCreate: "12-10-2018",
          desc: "Người quản lí hệ thống. Có toàn quyền quyết định ",
          id: "ce088e39-0b39-7de4-a59b-678ed34a74c8",
          name: "Admin",
          roles: ["00001", "00002", "00003", "00004", "00005", "00006", "00007", "00008", "00009"]
      },
      {
          dateCreate: "12-10-2018",
          desc: "Quản lí việc bán hàng của công ty",
          id: "b13d4b82-0cdd-40da-2762-4bf320ef8699",
          name: "Nhân viên bán hàng",
          roles: []
      },
      {
          dateCreate: "12-10-2018",
          desc: "Quản lí việc mua hàng ",
          id: "b7cb0e09-17b8-6826-987f-4123566ba5ba",
          name: "Nhân viên mua hàng",
          roles:["00001", "00002", "00003", "00004", "00005", "00006"]
      }
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
