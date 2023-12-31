import { serverAdress } from "../../../../utils"
import { LOGIN, SET_REGISTER_ERROR } from "../actions"

export const registerAction = (email: string, phone: string, username: string, password: string) => {

  return async (dispatch: any) => {
    const cartFromStorage = localStorage.getItem('cart')
    const cart = cartFromStorage ? JSON.parse(cartFromStorage) : []
    try {
      const res = await fetch(serverAdress + '/signup', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail: email,
          number: phone,
          username,
          password,
          cart
        })
      })
      const user = await res.json()
      localStorage.setItem('accessToken', user.accessToken)
      dispatch({ type: LOGIN, payload: user })
      window.location.reload()
    } catch (err) {
      console.log(err)
      dispatch({ type: SET_REGISTER_ERROR, payload: 'Ошибка регистрации, проверьте введенные данные или попробуйте другую почту' })
    }
  }
}