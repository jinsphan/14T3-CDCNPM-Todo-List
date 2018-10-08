import {DELETE_EMPLOYEES} from './constant'
import {remove} from 'lodash'
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
    ]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case DELETE_EMPLOYEES:
  {

      return { ...state,employees : remove(state.employees,(e)=>{ return e.emplId !== action.payload.emplId}) }
  }

  default:
    return state
  }
}
