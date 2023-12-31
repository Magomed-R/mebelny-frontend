import { serverAdress } from "../../../../utils"
import { GET_ALL_USERS, GET_ORDERS } from "../actions";

export const getAdminData = () => {
  return async (dispatch: any) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      try {
        const usersRes = await fetch(serverAdress + '/users/all', {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
          }
        })
        const ordersRes = await fetch(serverAdress + '/purchase/all', {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
          }
        })
        const users = await usersRes.json()
        const orders = await ordersRes.json()
        dispatch({ type: GET_ALL_USERS, payload: users })
        dispatch({ type: GET_ORDERS, payload: orders })
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}