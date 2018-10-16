/**
 * Created by minmin on 10/9/18.
 */
import {ADD_USERS,UPDATE_USERS,DELETE_USERS,VIEWING_USERS} from'./constant'
export const addUser = (param) => ({
  type: ADD_USERS,
  payload: param
})
export const updateUser = (param) => ({
    type: UPDATE_USERS,
    payload: param
})
export const deleteUser = (param) => ({
    type: DELETE_USERS,
    payload: param
})
export const viewingUser = (param) => ({
    type: VIEWING_USERS,
    payload: param
})