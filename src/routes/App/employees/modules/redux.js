import {DELETE_EMPLOYEES,VIEWING_EMPLOYEES,ADD_EMPLOYEES,UPDATE_EMPLOYEES} from './constant'
import {remove, findIndex} from 'lodash'
const initialState = {
    employees : [
        {
            emplId : 'NV0001',
            name : 'Huynh Quang Viet',
            address : 'lien chieu',
            numphone : '0343631403',
        },
        {
            emplId : 'NV0002',
            name : 'Huynh Quang nam',
            address : 'lien chieu',
            numphone : '0343631403',
        },
        {
            emplId : 'NV0003',
            name : 'Huynh Quang quan',
            address : 'lien chieu',
            numphone : '0343631403',
        },
        {
            emplId : 'NV0004',
            name : 'Huynh Quang quy',
            address : 'lien chieu',
            numphone : '0343631403',
        },
        {
            emplId : 'NV0005',
            name : 'Huynh Quang phuc',
            address : 'lien chieu',
            numphone : '0343631403',
        },
    ],
    viewingEmpl : {}
}
const addEmpl = (data) => {
    let newData = initialState.employees;
    newData.push(data);
    return newData
}
const updateEmpl = (data) => {
    let newData = initialState.employees;
    let index = findIndex(newData, e=>{ return e.emplId === data.emplId})
    console.log(index)
    newData[index]=data
    console.log(newData)
    return newData
}

export default (state = initialState, action) => {
  switch (action.type) {
      case DELETE_EMPLOYEES:
      {
          return { ...state,employees : remove(state.employees,(e)=>{ return e.emplId !== action.payload.emplId}) }
      }
      case VIEWING_EMPLOYEES:
      {
          return { ...state,viewingEmpl:action.payload }
      }
      case ADD_EMPLOYEES:
      {
          console.log(action.payload)
          return { ...state, employees: addEmpl(action.payload)}
      }
      case UPDATE_EMPLOYEES:
      {
          return { ...state,employees: updateEmpl(action.payload)}
      }



      default:
    return state
  }
}
