import { serverAdress } from "../../../../utils"
import { GET_USER_CART } from "../../cartReducer";
import { LOGIN } from "../actions"

export const checkAccessToken = () => {
  return async (dispatch: any) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      try {
        const res = await fetch(serverAdress + '/users/one', {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
          }
        })
        const user = await res.json()
        dispatch({ type: LOGIN, payload: { user, accessToken } })
        dispatch({ type: GET_USER_CART, payload: user.cart })
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}