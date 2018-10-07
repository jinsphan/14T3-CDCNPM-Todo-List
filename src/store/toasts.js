export const ADD_TOAST = 'ADD_TOAST'
export const REMOVE_TOAST = 'REMOVE_TOAST'

let id = 0

const defaultOptions = {
  color: '#6796e6'
}

export function createToast (options) {
  return {
    ...defaultOptions,
    ...options,
    id: id++
  }
}

export function addToast (options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST
  }
}

export function removeToast (id) {
  return {
    payload: id,
    type: REMOVE_TOAST
  }
}

export default function toasts (state = [], action) {
  const { payload, type } = action

  switch (type) {
    case ADD_TOAST:
      return [payload, ...state]

    case REMOVE_TOAST:
      return state.filter(toast => toast.id !== payload)

    default:
      return state
  }
}
