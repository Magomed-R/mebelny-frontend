import { serverAdress } from "../../../../utils"
import { GET_USER_CART } from "../../cartReducer"
import { LOGIN, SET_AUTH_ERROR } from "../actions"

export const loginAction = (login: string, password: string) => {

  return async (dispatch: any) => {
    const cartFromStorage = localStorage.getItem('cart')
    const cart = cartFromStorage ? JSON.parse(cartFromStorage) : []
    try {
      const res = await fetch(serverAdress + '/login', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail: login,
          password: password,
          cart
        })
      })
      const user = await res.json()
      localStorage.setItem('accessToken', user.accessToken)
      dispatch({ type: LOGIN, payload: user })
      dispatch({ type: GET_USER_CART, payload: user.cart })
    } catch (err) {
      dispatch({ type: SET_AUTH_ERROR, payload: 'Пользователь не найден' })
    }
  }
}