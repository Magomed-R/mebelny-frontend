import { ASK_ADMIN_ERROR } from "../store";
import { serverAdress } from "./serverAdress";

export const askAdmin = (name: string, phone: string, city?: string, comment?: string) => {
  const accessToken = localStorage.getItem('accessToken');
  return async (dispatch: any) => {
    try {
      const res = await fetch(serverAdress + '/ask', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          username: name,
          number: phone,
          city,
          comment
        })
      })
      const data = res.json()
    } catch (err) {
      dispatch({ type: ASK_ADMIN_ERROR, payload: 'Ошибка, проверьте введенные данные' })
    }
  }
}