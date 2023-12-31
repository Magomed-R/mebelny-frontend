import { serverAdress } from "../../../../utils"
import { GET_USER_CART } from "../actions"

export const makeOrder = () => {
  const accessToken = localStorage.getItem('accessToken');
  return async (dispatch: any) => {
    try {
      const res = await fetch(serverAdress + '/order', {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`
        },
      })
      const user = await res.json()
      dispatch({ type: GET_USER_CART, payload: user.cart })
    } catch (err) {
      console.log(err)
    }
  }
}