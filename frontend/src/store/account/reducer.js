import * as types from './actionTypes'

const initialState = {
  details: [],
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.SET_ACCOUNT_DETAILS:
      return {
        ...state,
        details: payload,
      }
    default:
      return state
  }
}


export default reducer
