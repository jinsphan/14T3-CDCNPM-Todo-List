/**
 * Created by minmin on 10/9/18.
 */
import {ADD_ROLES,UPDATE_ROLES,DELETE_ROLES,VIEWING_ROLES} from './constant'
import { findIndex,remove } from 'lodash'
const initialState = {
    listRoles : [
      {
          idRole : '00001',
          name : 'Tao moi san pham',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
      {
          idRole : '00002',
          name : 'Chinh sua san pham',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
      {
          idRole : '00003',
          name : 'Xoa san pham',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
      {
          idRole : '00004',
          name : 'Tao moi don mua hang',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
      {
          idRole : '00005',
          name : 'Chinh sua don mua hang',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
      {
          idRole : '00006',
          name : 'Xoa don mua hang',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
      {
          idRole : '00007',
          name : 'Tao moi ke hoach giao hang',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
      {
          idRole : '00008',
          name : 'Chinh sua ke hoach giao hang',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
      {
          idRole : '00009',
          name : 'Xoa ket hoach giao hang',
          desc : 'co quyen tao moi mot san pham moi',
          status : true,
      },
  ],
    viewingRoles : {},
}
const addRoles = (data) => {
    let state = initialState.listRoles
    state.push(data)
    return state
}
const updateRoles = (data) => {
    let state = initialState.listRoles
    let index = findIndex(state, e => {return e.idRole === data.idRole})
    state[index] = data
    return state
}
export default (state = initialState, action) => {
  switch (action.type) {

      case ADD_ROLES:
        return { ...state, listRoles:addRoles(action.payload) }
      case UPDATE_ROLES:
          return { ...state, listRoles:updateRoles(action.payload) }
      case DELETE_ROLES:
          return { ...state, listRoles: remove(state.listRoles, e => { return e.idRole !== action.payload.idRole}) }
      case VIEWING_ROLES:
          return { ...state, viewingRoles:action.payload }
      default:
        return state
  }
}
