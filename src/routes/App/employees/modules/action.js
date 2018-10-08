import {DELETE_EMPLOYEES} from './constant'


export const deleteEmpl = (param) => ({
  type: DELETE_EMPLOYEES,
  payload: param
})
