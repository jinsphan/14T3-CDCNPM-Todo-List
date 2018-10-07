// ------------------------------------
// Constants
// ------------------------------------
import User from '../../../../../services/api/model/User'
import { addToast } from '../../../../../store/toasts'

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------

const fetchUsersSuccess = (listUser) => ({
  type    : FETCH_USERS_SUCCESS,
  listUser
})
export const fetchUsers = () => {
  return (dispatch) => {
    User.find({
      filter: {
        order: 'id DESC'
      }
    }).then((responsive) => {
      dispatch(fetchUsersSuccess(responsive.data))
    }).catch((e) => {
    })
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
    User.deleteById(id).then((responsive) => {
      dispatch(fetchUsers())
    }).catch((e) => {
    })
  }
}
export const actions = {
  fetchUsers
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_USERS_SUCCESS]    : (state, action) => ({ ...state, listUser: action.listUser }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  listUser: []
}
export default function listUserReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
