import { Action } from "../../interfaces"
import { ASK_ADMIN_ERROR, LOGIN, LOGOUT, SET_AUTH_ERROR, SET_REGISTER_ERROR } from "./actions"
import { user } from "./userInterfaces"

const initialUserState: user = {
  isAuth: false,
  authError: '',
  registerError: '',
  askAdminError: '',
  accessToken: '',
  cart: [],
  mail: '',
  role: '',
  username: '',
  adress: '',
  number: ''
}

export const userReducer = (state = initialUserState, action: Action) => {
  switch (action.type) {
    case LOGIN: {
      const accessToken = action.payload.accessToken;
      const { mail, cart, role, username, address, number } = action.payload.user;
      return {
        ...state, isAuth: true, accessToken, mail, role, username, adress: address, cart, number
      }
    }
    case LOGOUT: {
      return initialUserState
    }
    case SET_AUTH_ERROR: {
      return { ...state, authError: action.payload }
    }
    case SET_REGISTER_ERROR: {
      return { ...state, registerError: action.payload }
    }
    case ASK_ADMIN_ERROR: {
      return { ...state, askAdminError: action.payload }
    }
    default:
      return state
  }
}