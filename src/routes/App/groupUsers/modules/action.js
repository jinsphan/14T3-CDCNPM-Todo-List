/**
 * Created by minmin on 10/9/18.
 */
import {ADD_GROUP_USER,UPDATE_GROUP_USER,DELETE_GROUP_USER,VIEWING_GROUP_USER} from './constant'

export const addGrUser = (param) => ({
  type: ADD_GROUP_USER,
  payload: param
})
export const updateGrUser = (param) => ({
    type: UPDATE_GROUP_USER,
    payload: param
})

export const deleteGrUser = (param) => ({
    type: DELETE_GROUP_USER,
    payload: param
})
export const viewingGrUser = (param) => ({
    type: VIEWING_GROUP_USER,
    payload: param
})
