import {DELETE_EMPLOYEES,VIEWING_EMPLOYEES,UPDATE_EMPLOYEES,ADD_EMPLOYEES} from './constant'


export const deleteEmpl = (param) => ({
  type: DELETE_EMPLOYEES,
  payload: param
})
export const updateEmpl = (param) => ({
  type: UPDATE_EMPLOYEES,
  payload: param
})
export const addEmpl = (param) => ({
  type: ADD_EMPLOYEES,
  payload: param
})
export const viewingEmpl = (param) => ({
  type: VIEWING_EMPLOYEES,
  payload: param
})
