import { serverAdress } from "../../../../utils"
import { SET_REGISTER_ERROR } from "../actions"

export const editUserData = (mail: string, number: string, username: string, setSuccess: any) => {

  return async (dispatch: any) => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await fetch(serverAdress + '/users/edit', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          mail,
          number,
          username,
        })
      })
      setSuccess(true)
    } catch (err) {
      console.log(err)
      dispatch({ type: SET_REGISTER_ERROR, payload: 'Ошибка при сохранении данных' })
    }
  }
}