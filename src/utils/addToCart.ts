import { serverAdress } from "./serverAdress"

export const addToCart = (id: string, accessToken: string, isAuth: boolean) => {
  fetch(serverAdress + '/cart/add', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify({ id })
  })
}
