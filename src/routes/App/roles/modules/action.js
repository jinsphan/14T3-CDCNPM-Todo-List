/**
 * Created by minmin on 10/9/18.
 */

import {ADD_ROLES,UPDATE_ROLES,DELETE_ROLES,VIEWING_ROLES} from './constant'


export const addRoles = (param) => ({
  type: ADD_ROLES,
  payload: param
})
export const updateRoles = (param) => ({
    type: UPDATE_ROLES,
    payload: param
})
export const deleteRoles = (param) => ({
    type: DELETE_ROLES,
    payload: param
})
export const viewingRoles = (param) => ({
    type: VIEWING_ROLES,
    payload: param
})

