import { Action } from "../../interfaces"
import { GET_USER_CART } from "./actions"

const initialCartState: any[] = []

export const cartReducer = (state = initialCartState, action: Action) => {
  switch (action.type) {
    case GET_USER_CART: {
      return [...action.payload]
    }
    default: {
      return state
    }
  }
}