import { GET_ALL_PAGE } from "../types/PageTypes"

const initialState = {
    listPage:[]
}

export const pageReducer =(state = initialState, action) => {
  switch (action.type) {

  case GET_ALL_PAGE:
    return { ...state, listPage:action.data }

  default:
    return state
  }
}
