import { Action } from "../../interfaces"
import { GET_ALL_USERS, GET_ORDERS } from "./actions"

const initialAdminState = {
  allUsers: [],
  orders: []
}

export const adminReducer = (state = initialAdminState, action: Action) => {
  switch (action.type) {
    case GET_ALL_USERS: {
      return { ...state, allUsers: [...action.payload] }
    }
    case GET_ORDERS: {
      return { ...state, orders: [...action.payload] }
    }
    default: {
      return state
    }
  }
}